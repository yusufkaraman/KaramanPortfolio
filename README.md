# Kişisel Finans Takipçisi (Personal Finance Tracker)

Kişisel Finans Takipçisi is a web-based, static Progressive Web Application (PWA) designed to track and manage multiple asset types in one place. It allows users to monitor their personal portfolio with real-time price updates, built-in analytics, and AI assistance.

## Features

- **Multi-Asset Tracking**: Track various types of assets including:
  - Gold (Gram Gold, Ounce)
  - Currencies (USD, EUR, GBP, etc.)
  - Stocks (NASDAQ)
  - Cryptocurrencies (BTC, ETH, SOL, etc.)
  - BIST (Borsa Istanbul) Stocks
- **Real-Time Price Updates**: Fetches live prices for all supported assets from multiple external APIs.
- **AI Chatbot**: Built-in AI Financial Advisor powered by the Gemini API to help analyze your portfolio and answer financial queries.
- **Portfolio Analytics & Charts**: Visualizes asset distribution and historical performance using pie charts and performance graphs.
- **News Integration**: Displays relevant financial news fetched via Google News RSS.
- **PDF Report Generation**: Export your portfolio summary as a downloadable PDF report.
- **PWA Support**: Install the application on your mobile or desktop device for a native-like experience with offline capabilities (via service worker).
- **Customization**: Dark/Light mode support, dynamic animated backgrounds, heatmap visualizations, and multi-language support (TR/EN).
- **Data Portability**: Easily export and import your portfolio data in JSON format.

## Technologies Used

This project is built purely as a static frontend application without any build tools or package managers.

- **HTML5**
- **Tailwind CSS** (via CDN)
- **Vue.js 3** (via CDN)
- **Vanilla JavaScript**

## API Providers

The application relies on several free and public APIs (sometimes routed via CORS proxies) to fetch real-time financial data:

- **Finnhub**: Used for US stock prices (NASDAQ).
- **ExchangeRate-API**: Used for currency exchange rates (USD/TRY, EUR/TRY, etc.).
- **CoinGecko**: Used for cryptocurrency prices.
- **Yahoo Finance**: Used for BIST (Borsa Istanbul) stock prices.
- **Custom Cloudflare Worker**: A custom API wrapper (`gold-price-api.yusufkaraman68.workers.dev`) specifically built for fetching Gold prices.
- **Google News RSS**: Used to fetch relevant financial news.
- **Gemini API**: Powers the AI Financial Advisor chatbot.
- **Logo.dev**: Used for fetching company logos for stocks.

## Getting Started

Because this is a completely static frontend application without a build step, getting started is extremely simple.

1. Clone or download the repository.
2. Serve the directory using any static web server. For example, using Python 3:
   ```bash
   python -m http.server 3000
   ```
3. Open your browser and navigate to `http://localhost:3000`.

Alternatively, you can simply open the `index.html` file directly in your web browser, though some features (like PWA installation or certain API fetches) may require it to be served over `http`/`https`.

## Usage

- **Add an Asset**: Click the "Varlık Ekle" (Add Asset) button, select the asset type, enter the symbol, and the quantity.
- **Update Prices**: Click "Fiyatları Güncelle" (Update Prices) to fetch the latest values from the respective APIs.
- **View Charts**: Click the "Grafik" (Chart) button to view your portfolio distribution and performance history.
- **Consult AI**: Click the floating action button at the bottom left to chat with the Gemini-powered Financial Advisor about your portfolio.
- **Export/Import**: Use the settings or action buttons to save your portfolio to a JSON file or generate a PDF report.
