console.log(window); //en dış 
console.log(document.location.host);
//window içindekilere erişirken direkt yazılabilir
//document içindekiler için document. yapman gerek

// yorum satırı
// * rabia
// ? rabia
// ! kırmızı yorum satırı
// TODO yapılacaklar

// console logları direkt kaldırmak için javascript console utils eklentisi ekleyebilirsin ctrl+shif+d

//? ctrl + ö çoklu yorum satırı 

/*
<script>
? js etiketi için
? ya body içinde sona ya da ayrı app.js dosyası açılır
? htmlde body sonuna dahil edilir 
<script src = "app.js"></script>
</script>
*/


//todo Document write ile çıktı verme
//write direkt yazar writeln alt satırdan yazar
//normalde böyle ama bende olmuyor.
//veya br ile de geçilebilir
document.writeln("hello world");
document.writeln("hello <br>");
document.writeln("hello world");


//todo console.log ile çıktı verme
console.log("rabia");
console.log({name:"rabia", surname: "cansel"}); //obje

console.clear() //?console temizlenir

let a=5;
let b=10;
console.log(a+b)


let c=5;
let d=10;
console.log("iki sayının toplamı"+ (c+d));
console.log("iki sayının toplamı",c+d);

//todo Alert (uyarı) popup ile çıktı verme
alert("iki sayının toplamı : "+(a+b));

console.error("hata oluştu") //kırmızı yazar
console.warn("hata oluştu") //sarı çıkar


//todo source geliştirme aracı
//debugger; //bu şekilde kodu adım adım giderek hatayı buluruz
console.log("rabia");
console.log("rabia");
console.log("rabia");
//? network isteklerin gittiğini kontrol edebiliriz

//* applicationda eklenen verilere baktığımız yer
//*key ve value kullanılır


//todo değişken tanımlama
var x=5; //global scope
//function scope ise değişken fde tanımlanırsa
//block scope da if else yapısı, for burda tanımlanırsa

//?var function scope ramde çok yer kaplar
/*
?var değişkenini fonksiyonda block içinde 
?tanımlarsak fonksiyonda da çağırabiliriz.  
*/
//!block s. da let yaparsak sadece burada çağırılır. fde değil

//var için iki kere a tanımlarsak sonuncuyu alır.
var m =5;
var n=10;
//let için yaparsak ilk atadığımız değeri alır

//!const a = 10 sabittir sonrasında değiştirilemez
const user = {
    username : "rabia",
    password : "123"
}

user.username = "rabiacansel";
console.log(user);
//user = {} yapsaydık olmazdı ama objesini değiştirebilriz


//todo veri türleri
let isim = "rabia";
console.log(typeof isim) //verinin türünü yazar

let sayi = "5" //string
let sayi2 = "6"
console.log(a+b); //56 yazar
console.log(isim+sayi+sayi2)
console.log(5>2) //true boolean
//== , !=
//undifened tanımlanmamış
//dizilerde obje

/*
? 5=="5" true
? 5=="5" true
? 5==="5" false, hem içi hem de veri türü aynı mı
? sayi%=5  modu al sayıya ata.  
*/
console.log(a>5 && b<8); //VE 
// ||  veya
console.log(!(5>3)); //false döner
let yas = 22;
console.log(yas=!23) //false


//todo diyalog kutuları
//alert(); uyarı verir
//! kullanıcıdan mesaj alır
let ad = prompt("isminizi giriniz :"); 
console.log(ad);
//kullanıcıdan alınan değer her zaman string döner
//! Onaylama
let sonuc = confirm("silmek istediğinize emin misiniz?");
//boolean cevap verir
console.log(sonuc);



//todo Koşul Yapıları
let not =70;

if(not>50){
    console.log("Geçtiniz, notunuz :" + not);
}else{
    console.log("Kaldınız, notunuz :"+not);
}

//? Örnek 2
//kıyaslama yapmak için int gerek
let yas2 = Number(prompt("yaşınız :"));
let para = Number(prompt("bütçeniz :"))

if(yas2>=18 && para>=3000){
    alert("ehliyet sınavına katılabilirsiniz.");
}else{
    alert("ehliyet sınavına katılamazsınız");
}




//yas.length  girilenin karakter sayısını verir



//todo switch case

let sayi5 = prompt("sayi giriniz: ");

switch(sayi5){
    case "1" :
        console.log("Girilen sayı 1");
    break;
    
    case "2" :
        console.log("girilen sayi 2");
    break;
    
    default:
        console.log("farklı sayı giriniz");
    break;    
}


//parseInt(), parseFloat(), Number() int çevirir.
//String(), (55).toString() stringe çevirir.
//String([1,2,3]) yapmazsak object döndürür. 1,2,3


//todo for while döngüsü
for(int i=1;i<50;i++){};

while(yas<50){
    //sonsuz döngü
}

//dizi 0. indexten başlar fakat length yaparsan 1den başlar.
