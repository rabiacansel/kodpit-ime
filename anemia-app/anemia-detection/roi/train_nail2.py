import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model

# ----------------------------
# 1. MODEL YÜKLE
# ----------------------------
save_path = r"C:\Users\r4bi4\Desktop\bseu\bitirme\anemia\train_nail\results"
model_path = os.path.join(save_path, "nail_unet_model.h5")

model = load_model(model_path)
print("Model yüklendi")

# ----------------------------
# 2. TEST GÖRÜNTÜSÜ
# ----------------------------
img_path = r"C:\Users\r4bi4\Desktop\bseu\test_dataset\nail3_1.png"

img = cv2.imread(img_path)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

orig = img.copy()

# ----------------------------
# 3. PREPROCESS
# ----------------------------
img_resized = cv2.resize(img, (256, 256))
img_input = img_resized / 255.0
img_input = np.expand_dims(img_input, axis=0)

# ----------------------------
# 4. PREDICTION
# ----------------------------
pred = model.predict(img_input)[0]
pred_mask = (pred > 0.5).astype(np.uint8)

# ----------------------------
# 5. ORIGINAL SIZE'E GERİ AL
# ----------------------------
pred_mask_resized = cv2.resize(pred_mask, (orig.shape[1], orig.shape[0]))

# ----------------------------
# 6. MASKED OUTPUT
# ----------------------------
nail_only = cv2.bitwise_and(orig, orig, mask=pred_mask_resized)

# ----------------------------
# 7. VISUALIZATION
# ----------------------------
plt.figure(figsize=(12,4))

plt.subplot(1,3,1)
plt.title("Original")
plt.imshow(orig)
plt.axis("off")

plt.subplot(1,3,2)
plt.title("Predicted Mask")
plt.imshow(pred_mask_resized, cmap="gray")
plt.axis("off")

plt.subplot(1,3,3)
plt.title("Nail Extraction")
plt.imshow(nail_only)
plt.axis("off")

plt.show()