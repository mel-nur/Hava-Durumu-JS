const API_KEY = "KENDİ_API_KEYİNİZ";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("sehir-input");
const araBtn = document.getElementById("ara-btn");
const havaKart = document.getElementById("hava-kart");
const gecmisDiv = document.getElementById("gecmis");
const saatEl = document.getElementById("saat");
const tarihEl = document.getElementById("tarih");

function saatiGuncelle() {
    const simdi = new Date();

    const saat = simdi.toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const tarih = simdi.toLocaleDateString("tr-TR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    saatEl.textContent = saat;
    tarihEl.textContent = tarih;
}

saatiGuncelle();
setInterval(saatiGuncelle, 1000);

function gecmisiYukle() {
    return JSON.parse(localStorage.getItem("gecmis")) || [];
}

function gecmiseEkle(sehir) {
    let gecmis = gecmisiYukle();
    gecmis = gecmis.filter(s => s.toLowerCase() !== sehir.toLowerCase());
    gecmis.unshift(sehir);
    if(gecmis.length > 5) gecmis = gecmis.slice(0,5);
    localStorage.setItem("gecmis", JSON.stringify(gecmis));
    gecmisiGoster();
}
function gecmisiGoster() {
    const gecmis = gecmisiYukle();
    gecmisDiv.innerHTML = "";
    gecmis.forEach(sehir => {
        const pill = document.createElement("span");
        pill.className = "gecmis-item";
        pill.textContent = sehir;
        pill.addEventListener("click", () => havaDurumunuGetir(sehir));
        gecmisDiv.appendChild(pill);
    });
}

gecmisiGoster();

function ikonSec(kod) {
  const ikonlar = {
    "01": "☀️", "02": "🌤️", "03": "☁️", "04": "☁️",
    "09": "🌧️", "10": "🌦️", "11": "⛈️",
    "13": "❄️", "50": "🌫️"
  };
  const prefix = kod.slice(0, 2);
  return ikonlar[prefix] || "🌡️";
}

async function havaDurumunuGetir(sehir) {
  havaKart.innerHTML = `<p class="bos-mesaj">Yükleniyor...</p>`;

  try {
    const url = `${API_URL}?q=${encodeURIComponent(sehir)}&appid=${API_KEY}&units=metric&lang=tr`;
    const yanit = await fetch(url);

    if(!yanit.ok) {
        throw new Error("Şehir bulunamadı");
    }

    const veri = await yanit.json();
    gecmiseEkle(veri.name);
    kartGoster(veri);

  } catch (hata) {
    havaKart.innerHTML = `
      <p class="bos-mesaj">🌍 Bir şehir ara</p>
      <p class="hata">${hata.message}</p>
    `;
  }
}

function kartGoster(veri) {
    const ikon = ikonSec(veri.weather[0].icon);
    const sicaklik = Math.round(veri.main.temp);
    const hissedilen = Math.round(veri.main.feels_like);
    const nem = veri.main.humidity;
    const ruzgar = Math.round(veri.wind.speed * 3.6); // m/s → km/h
    const durum = veri.weather[0].description;
    
  havaKart.innerHTML = `
    <p class="sehir-adi">${veri.name}</p>
    <p class="ulke">${veri.sys.country}</p>
    <div class="hava-ikon">${ikon}</div>
    <p class="sicaklik">${sicaklik}°C</p>
    <p class="durum">${durum}</p>
    <div class="detaylar">
      <div class="detay-item">
        <span class="detay-label">Hissedilen</span>
        <span class="detay-deger">${hissedilen}°C</span>
      </div>
      <div class="detay-item">
        <span class="detay-label">Nem</span>
        <span class="detay-deger">${nem}%</span>
      </div>
      <div class="detay-item">
        <span class="detay-label">Rüzgar</span>
        <span class="detay-deger">${ruzgar} km/h</span>
      </div>
    </div>
  `;
}

araBtn.addEventListener("click", () => {
    const sehir = input.value.trim();
    if (sehir) havaDurumunuGetir(sehir);
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const sehir = input.value.trim();
        if (sehir) havaDurumunuGetir(sehir);
    }
});

input.addEventListener("input", () => {
    let deger = input.value;
    if(deger.length > 0) {
        input.value = deger.charAt(0).toUpperCase() + deger.slice(1);
    }
});
