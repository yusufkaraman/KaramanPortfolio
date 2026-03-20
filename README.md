# Personal Finance Tracker / Kişisel Finans Takipçisi

<p align="center">
  <a href="#english-version">🇺🇸 English</a> | <a href="#türkçe-versiyon">🇹🇷 Türkçe</a>
</p>

---

## English Version

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini API" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA Ready" />
</p>

A Progressive Web Application (PWA) built with Vue.js 3 and Tailwind CSS to track your personal finance portfolio. It supports various assets including Gold, Currencies, Stocks (NASDAQ), Cryptocurrencies, and BIST (Istanbul Stock Exchange) stocks. Data is securely synced via Firebase and enhanced with AI capabilities using the Gemini API.

### 🌟 Features

*   **Multi-Asset Tracking:** Monitor Gold (Gram), Currencies (USD, EUR, etc.), Stocks, Crypto, and BIST.
*   **Real-time Prices:** Fetches live prices from multiple APIs (Finnhub, CoinGecko, ExchangeRate-API).
*   **Portfolio Analytics:** Visualizes your portfolio distribution with pie charts and historical performance graphs.
*   **AI Financial Advisor:** Integrated AI Chatbot powered by Gemini for personalized financial advice and market insights.
*   **Firebase Sync:** Cloud synchronization of your portfolio data across multiple devices.
*   **Drag and Drop:** Easily reorder your assets in the dashboard.
*   **Financial News:** Aggregates related news based on your portfolio using Google News.
*   **Export/Import:** Save your portfolio locally as a JSON file and restore it later.
*   **PDF Reports:** Generate printable summary reports of your current portfolio.
*   **Customization:** Dark/Light mode, Dynamic Backgrounds, and Heatmap visualizations.
*   **PWA Ready:** Installable on desktop and mobile devices for an app-like experience. Offline capabilities via Service Workers.

### 💻 Technologies Used

*   **Frontend Framework:** [Vue.js 3 (Global Build)](https://vuejs.org/)
*   **Styling:** [Tailwind CSS (via CDN)](https://tailwindcss.com/)
*   **Backend/Auth:** [Firebase (Auth, Firestore)](https://firebase.google.com/)
*   **Icons/Fonts:** Inter Font, SVGs, CryptoIcons, Logo.dev
*   **PWA:** Service Workers (`sw.js`), Web App Manifest (`manifest.json`)

### 🔌 Integrated APIs & Configuration

The application aggregates data from various sources. **Note:** Some API keys are currently hardcoded in `index.html` for demonstration purposes. Before deploying to production, replace them with your own keys.

*   **Firebase:** Handles user authentication (Google Login) and cloud sync (Firestore).
    *   *Setup:* Replace the `firebaseConfig` object in `index.html` with your own Firebase project credentials. Ensure "Google" is enabled in your Firebase Authentication settings and Firestore Database is initialized.
*   **Google Gemini API:** Powers the AI Financial Advisor chatbot.
    *   *Setup:* Replace the `GEMINI_API_KEY` variable in `index.html` with your Google Gemini key.
*   **Finnhub API:** Provides NASDAQ stock quotes.
    *   *Setup:* Replace the `FINNHUB_API_KEY` variable in `index.html`.
*   **NewsAPI (via RSS/Google News):** Fetches relevant financial news.
    *   *Setup:* Uses Google News RSS. Optionally, a NewsAPI key can be updated in the `fetchNews` function.
*   **CoinGecko API:** Cryptocurrency prices (Free tier, no CORS issues).
*   **ExchangeRate-API:** Currency exchange rates.
*   **Yahoo Finance (via CORS proxy):** BIST stock quotes and historical data.
*   **Logo.dev:** Fetches company logos for stocks.
*   **Custom Cloudflare Worker:** Specific API for fetching Turkish Gram Gold prices.

### 🚀 How to Run

Since the application uses CDN links and is purely client-side, you don't need a complex build step to run it locally.

**Method 1: Direct File Open**
You can simply open the `index.html` file in your modern web browser.
*(Note: Some PWA features like Service Workers might not work perfectly due to browser security restrictions on `file://` protocols).*

**Method 2: Local Web Server (Recommended)**
To fully experience the PWA features (like installation and caching), serve the directory with a local web server.

If you have Python installed:
```bash
python -m http.server 8000
```

If you have Node.js and `npx` installed:
```bash
npx serve
```

Then, navigate to `http://localhost:8000` (or the port specified by your server) in your browser.

### 📄 License

This project is open-source and available under the MIT License.

---

## Türkçe Versiyon

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini API" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA Ready" />
</p>

Kişisel finans portföyünüzü takip etmek için Vue.js 3 ve Tailwind CSS ile oluşturulmuş Progresif Web Uygulaması (PWA). Altın (Gram), Döviz, Hisse Senetleri (NASDAQ), Kripto Paralar ve BIST (Borsa İstanbul) hisse senetleri gibi çeşitli varlıkları destekler. Veriler Firebase üzerinden güvenle eşitlenir ve Gemini API kullanılarak yapay zeka özellikleriyle zenginleştirilmiştir.

### 🌟 Özellikler

*   **Çoklu Varlık Takibi:** Altın (Gram), Döviz (USD, EUR vb.), Hisse, Kripto ve BIST takibi.
*   **Gerçek Zamanlı Fiyatlar:** Canlı fiyatları birden fazla API'den çeker (Finnhub, CoinGecko, ExchangeRate-API).
*   **Portföy Analitiği:** Pasta grafikleri ve geçmiş performans çizelgeleri ile portföy dağılımınızı görselleştirir.
*   **Yapay Zeka Finans Danışmanı:** Kişiselleştirilmiş finansal tavsiyeler ve piyasa içgörüleri için Gemini destekli entegre yapay zeka sohbet robotu.
*   **Firebase Senkronizasyonu:** Portföy verilerinizin birden fazla cihaz arasında bulut üzerinden eşitlenmesi.
*   **Sürükle ve Bırak:** Kontrol panelindeki varlıklarınızı kolayca yeniden sıralayın.
*   **Finansal Haberler:** Portföyünüze dayalı ilgili haberleri Google Haberler üzerinden bir araya getirir.
*   **Dışa/İçe Aktar:** Portföyünüzü JSON dosyası olarak yerel olarak kaydedin ve daha sonra geri yükleyin.
*   **PDF Raporları:** Mevcut portföyünüzün yazdırılabilir özet raporlarını oluşturun.
*   **Özelleştirme:** Karanlık/Aydınlık modu, Dinamik Arka Planlar ve Isı Haritası görselleştirmeleri.
*   **PWA Desteği:** Masaüstü ve mobil cihazlarda uygulama deneyimi için kurulabilir. Servis Çalışanları (Service Workers) ile çevrimdışı yetenekler.

### 💻 Kullanılan Teknolojiler

*   **Frontend Framework:** [Vue.js 3 (Global Build)](https://vuejs.org/)
*   **Stil:** [Tailwind CSS (CDN aracılığıyla)](https://tailwindcss.com/)
*   **Backend/Auth:** [Firebase (Auth, Firestore)](https://firebase.google.com/)
*   **İkonlar/Fontlar:** Inter Font, SVG'ler, CryptoIcons, Logo.dev
*   **PWA:** Servis Çalışanları (`sw.js`), Web Uygulama Bildirimi (`manifest.json`)

### 🔌 Entegre API'ler ve Yapılandırma

Uygulama, verileri çeşitli kaynaklardan bir araya getirir. **Not:** Bazı API anahtarları gösterim amacıyla `index.html` dosyasında geçici olarak kodlanmıştır. Üretime (production) geçmeden önce bu anahtarları kendi anahtarlarınızla değiştirin.

*   **Firebase:** Kullanıcı kimlik doğrulamasını (Google Girişi) ve bulut eşitlemeyi (Firestore) yönetir.
    *   *Kurulum:* `index.html` içindeki `firebaseConfig` nesnesini kendi Firebase projenizin bilgileriyle değiştirin. Firebase Authentication ayarlarında "Google" sağlayıcısının etkinleştirildiğinden ve Firestore Veritabanının başlatıldığından emin olun.
*   **Google Gemini API:** Yapay Zeka Finans Danışmanı sohbet robotuna güç verir.
    *   *Kurulum:* `index.html` içindeki `GEMINI_API_KEY` değişkenini kendi Google Gemini anahtarınızla değiştirin.
*   **Finnhub API:** NASDAQ hisse senedi kotalarını sağlar.
    *   *Kurulum:* `index.html` içindeki `FINNHUB_API_KEY` değişkenini kendi anahtarınızla değiştirin.
*   **NewsAPI (RSS/Google News aracılığıyla):** İlgili finansal haberleri getirir.
    *   *Kurulum:* Google News RSS kullanır. İsteğe bağlı olarak, `fetchNews` fonksiyonunda bir NewsAPI anahtarı güncellenebilir.
*   **CoinGecko API:** Kripto para fiyatları (Ücretsiz kullanım, CORS sorunu yok).
*   **ExchangeRate-API:** Döviz kurları.
*   **Yahoo Finance (CORS proxy ile):** BIST hisse senedi kotaları ve geçmiş veriler.
*   **Logo.dev:** Hisse senetleri için şirket logolarını getirir.
*   **Özel Cloudflare Worker:** Türk Gram Altını fiyatlarını getirmek için özel API.

### 🚀 Nasıl Çalıştırılır

Uygulama CDN bağlantılarını kullandığından ve tamamen istemci tarafında (client-side) çalıştığından, yerel olarak çalıştırmak için karmaşık bir derleme adımına ihtiyacınız yoktur.

**Yöntem 1: Doğrudan Dosya Açma**
Sadece `index.html` dosyasını modern bir web tarayıcısında açabilirsiniz.
*(Not: Tarayıcının `file://` protokollerindeki güvenlik kısıtlamaları nedeniyle Servis Çalışanları gibi bazı PWA özellikleri mükemmel çalışmayabilir).*

**Yöntem 2: Yerel Web Sunucusu (Önerilen)**
PWA özelliklerini (kurulum ve önbellekleme gibi) tam olarak deneyimlemek için dizini yerel bir web sunucusu ile yayınlayın.

Python yüklüyse:
```bash
python -m http.server 8000
```

Node.js ve `npx` yüklüyse:
```bash
npx serve
```

Daha sonra, tarayıcınızda `http://localhost:8000` (veya sunucunuzun belirttiği porta) gidin.

### 📄 Lisans

Bu proje açık kaynaktır ve MIT Lisansı altında mevcuttur.
