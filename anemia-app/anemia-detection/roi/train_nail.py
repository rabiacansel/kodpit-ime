import os
import cv2
import numpy as np
from pycocotools.coco import COCO
from tensorflow.keras import layers, Model
import zipfile

class CocoDataset:
    def __init__(self, base_dir, ann_file, img_size=256):
        self.base_dir = base_dir
        self.coco = COCO(ann_file)
        self.ids = list(self.coco.imgs.keys())
        self.img_size = img_size

    def load_data(self):
        X, Y = [], []

        for img_id in self.ids:

            img_info = self.coco.loadImgs(img_id)[0]

            # 🔥 ROBoflow fix: direkt base_dir kullan
            path = f"{self.base_dir}/{img_info['file_name']}"

            img = cv2.imread(path)
            if img is None:
                continue

            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            img = cv2.resize(img, (self.img_size, self.img_size))

            ann_ids = self.coco.getAnnIds(imgIds=img_id)
            anns = self.coco.loadAnns(ann_ids)

            mask = np.zeros((img_info['height'], img_info['width']), dtype=np.uint8)

            for ann in anns:
                mask = np.maximum(mask, self.coco.annToMask(ann))

            mask = cv2.resize(
                mask,
                (self.img_size, self.img_size),
                interpolation=cv2.INTER_NEAREST
            )

            mask = (mask > 0).astype(np.uint8)

            X.append(img)
            Y.append(mask)

        return np.array(X), np.array(Y)
    
    


zip_path = r"C:\Users\r4bi4\Desktop\bseu\bitirme\anemia\train_nail\nails_segmentation.v50i.coco-segmentation.zip"
extract_path = r"C:\Users\r4bi4\Desktop\bseu\bitirme\anemia\train_nail\dataset"

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)


train_dir = os.path.join(extract_path, "train")
train_ann = os.path.join(train_dir, "_annotations.coco.json")

dataset = CocoDataset(train_dir, train_ann)

X_train, Y_train = dataset.load_data()

print("X shape:", X_train.shape)
print("Y shape:", Y_train.shape)


X_train = X_train / 255.0
Y_train = Y_train.astype(np.float32)
Y_train = np.expand_dims(Y_train, axis=-1)

def unet():
    inputs = layers.Input((256,256,3))

    c1 = layers.Conv2D(32,3,activation='relu',padding='same')(inputs)
    p1 = layers.MaxPooling2D()(c1)

    c2 = layers.Conv2D(64,3,activation='relu',padding='same')(p1)

    u1 = layers.UpSampling2D()(c2)
    concat = layers.concatenate([u1, c1])

    outputs = layers.Conv2D(1,1,activation='sigmoid')(concat)

    return Model(inputs, outputs)

model = unet()
import tensorflow as tf

def dice_loss(y_true, y_pred):
    y_true = tf.cast(y_true, tf.float32)
    y_pred = tf.cast(y_pred, tf.float32)

    intersection = tf.reduce_sum(y_true * y_pred)
    return 1 - (2. * intersection + 1) / (tf.reduce_sum(y_true) + tf.reduce_sum(y_pred) + 1)

model.compile(
    optimizer='adam',
    loss=dice_loss,
    metrics=['accuracy']
)

model.fit(
    X_train,
    Y_train,
    epochs=20,
    batch_size=8,
    validation_split=0.2
)


save_path = r"C:\Users\r4bi4\Desktop\bseu\bitirme\anemia\train_nail\results"

os.makedirs(save_path, exist_ok=True)

model.save(os.path.join(save_path, "nail_unet_model.h5"))
print("Model kaydedildi!")

import matplotlib.pyplot as plt

history = model.history.history

# Loss grafiği
plt.figure()
plt.plot(history['loss'], label='train_loss')

if 'val_loss' in history:
    plt.plot(history['val_loss'], label='val_loss')

plt.legend()
plt.title("Loss Curve")

plt.savefig(os.path.join(save_path, "loss_curve.png"))
plt.show()

import tensorflow as tf

def iou_metric(y_true, y_pred):
    y_pred = tf.cast(y_pred > 0.5, tf.float32)
    y_true = tf.cast(y_true, tf.float32)

    intersection = tf.reduce_sum(y_true * y_pred)
    union = tf.reduce_sum(y_true) + tf.reduce_sum(y_pred) - intersection

    return intersection / (union + 1e-7)

# train set için hızlı evaluation
preds = model.predict(X_train[:50])

print("pred min:", preds.min())
print("pred max:", preds.max())

ious = []

for i in range(len(preds)):
    y_true = Y_train[i]
    y_pred = preds[i]

    iou = iou_metric(y_true, y_pred).numpy()
    ious.append(iou)

print("Mean IoU:", np.mean(ious))

with open(os.path.join(save_path, "metrics.txt"), "w") as f:
    f.write(f"Mean IoU: {np.mean(ious)}\n")

print("Metrics saved!")

