alert("Ortalama Hesaplama Uygulaması")
let vize = Number(prompt("vize notunuzu giriniz :"))
let final = Number(prompt("final notunuzu giriniz :"))

let ortalama = vize*0.3 + final*0.7;

if(ortalama>50 || final>=50){
    alert("tebrikler geçtiniz.");
    confirm("devam etmek istiyor musunuz?");
}else if(ortalama<50 && final<50){
    alert("kaldınız.")
    confirm("devam etmek istiyor musunuz?");
}else{
    alert("geçtiniz.");
    confirm("devam etmek istiyor musunuz?");

}