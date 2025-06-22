# CAFFE - Premium Kahve Web Sitesi

Modern ve mobil uyumlu bir kafe web sitesi. React ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler

- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- ☕ **Kahve Menüsü**: Detaylı kahve çeşitleri ve fiyatlar
- 🍰 **Tatlı Menüsü**: Ev yapımı tatlılar ve açıklamalar
- 📞 **İletişim Formu**: Müşteri mesajları için çalışan form
- 🎨 **Modern Tasarım**: Kahve temalı renk paleti ve tipografi
- 🔗 **Sosyal Medya**: Sosyal medya bağlantıları
- ⚡ **Hızlı Navigasyon**: Yumuşak scroll animasyonları

## Teknolojiler

- **React 18** - Modern JavaScript kütüphanesi
- **Tailwind CSS 3** - Utility-first CSS framework
- **Font Awesome** - İkonlar için
- **Google Fonts** - Inter font ailesi

## Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm start
   ```

3. **Tarayıcınızda açın:**
   [http://localhost:3000](http://localhost:3000)

## Proje Yapısı

```
CAFFE/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Ana React bileşeni
│   ├── index.js           # React DOM render
│   └── index.css          # Tailwind CSS ve özel stiller
├── package.json           # Proje bağımlılıkları
├── tailwind.config.js     # Tailwind yapılandırması
└── postcss.config.js      # PostCSS yapılandırması
```

## Özelleştirme

### Renk Paleti
Tailwind config dosyasında özel kahve temalı renkler tanımlanmıştır:
- `coffee-brown`: #8B4513
- `coffee-dark`: #3C2415
- `coffee-light`: #D2B48C
- `cream`: #F5F5DC

### Menü İçeriği
`src/App.js` dosyasında `coffeeMenu` ve `dessertMenu` dizilerini düzenleyerek menü öğelerini güncelleyebilirsiniz.

### İletişim Bilgileri
İletişim bilgilerini `src/App.js` dosyasındaki Contact Section kısmından güncelleyebilirsiniz.

## Yapılabilecek Geliştirmeler

- [ ] Gerçek bir backend ile form entegrasyonu
- [ ] Resim galerisi ekleme
- [ ] Online sipariş sistemi
- [ ] Çoklu dil desteği
- [ ] Google Maps entegrasyonu
- [ ] Blog bölümü

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 