# 🌤️ Hava Durumu Uygulaması

Modern ve kullanıcı dostu bir hava durumu uygulaması. Kullanıcı şehir adı girerek anlık hava durumu bilgilerini görüntüleyebilir, arama geçmişini saklayabilir ve gerçek zamanlı saat/tarih bilgilerini takip edebilir.

## 📷 Uygulama Görselleri

### Ana Ekran
![Ana Ekran](images/ana-ekran.png)

### Şehir Arama
![Şehir Arama](images/sehir-arama.png)

### Hava Durumu Kartı
![Hava Durumu Kartı](images/hava-karti.png)

---

## 🚀 Özellikler

✅ Şehir adına göre hava durumu sorgulama  
✅ Anlık sıcaklık bilgisi  
✅ Hissedilen sıcaklık bilgisi  
✅ Nem oranı gösterimi  
✅ Rüzgar hızı gösterimi  
✅ Hava durumu ikonları  
✅ Gerçek zamanlı saat ve tarih  
✅ Son aranan şehirlerin saklanması  
✅ LocalStorage ile geçmiş kayıtları  
✅ Enter tuşuyla arama desteği  
✅ İlk harfi otomatik büyük yazma  
✅ Responsive tasarım  

---

## 🛠️ Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- OpenWeather API
- LocalStorage
- Fetch API
- Async/Await

---

## 📂 Proje Yapısı

```bash
HavaDurumu/
│
├── index.html
├── style.css
├── app.js
├── README.md
│
└── images/
    ├── ana-ekran.png
    ├── sehir-arama.png
    └── hava-karti.png
```

---

## ⚙️ Kurulum

Projeyi bilgisayarınıza klonlayın:

```bash
git clone https://github.com/kullaniciAdi/projeAdi.git
```

Proje klasörüne girin:

```bash
cd projeAdi
```

`index.html` dosyasını tarayıcıda açın.

---

## 🔑 API Kullanımı

Bu proje hava durumu verilerini OpenWeather API üzerinden almaktadır.

API anahtarınızı almak için:

1. OpenWeather sitesine kayıt olun
2. API Key oluşturun
3. `app.js` dosyasındaki API anahtarını değiştirin

```javascript
const API_KEY = "KENDI_API_KEYINIZ";
```

---

## 💡 Uygulama Mantığı

Uygulama şu şekilde çalışır:

1. Kullanıcı şehir adı girer
2. Girilen veri kontrol edilir
3. API isteği gönderilir
4. Gelen JSON verisi işlenir
5. Hava durumu kartı oluşturulur
6. Aranan şehir LocalStorage'a kaydedilir
7. Geçmiş şehirler görüntülenir

---

## 📌 Öğrenilen Konular

Bu projede aşağıdaki JavaScript konuları uygulanmıştır:

- DOM Manipülasyonu
- Event Listener
- Input işlemleri
- Fetch API
- Async/Await
- Promise yapısı
- LocalStorage
- Array işlemleri
- JSON kullanımı
- Template Literal
- setInterval()
- Tarih ve saat işlemleri

---

## 🔮 Gelecekte Eklenebilecek Özellikler

- 5 günlük hava tahmini
- Konuma göre otomatik hava durumu
- Karanlık/Aydınlık tema
- Şehir favorileme sistemi
- Daha gelişmiş hava ikonları
- Sıcaklık grafikleri
- Çoklu dil desteği

---

## 👩‍💻 Geliştirici

Melike Nur Çotak
