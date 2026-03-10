# Kişisel Finans Takipçisi (Personal Finance Tracker)

A Progressive Web Application (PWA) built with Vue.js 3 and Tailwind CSS to track your personal finance portfolio. It supports various assets including Gold, Currencies, Stocks (NASDAQ), Cryptocurrencies, and BIST (Istanbul Stock Exchange) stocks.

## 🌟 Features

*   **Multi-Asset Tracking:** Monitor Gold (Gram), Currencies (USD, EUR, etc.), Stocks, Crypto, and BIST.
*   **Real-time Prices:** Fetches live prices from multiple APIs.
*   **Portfolio Analytics:** Visualizes your portfolio distribution with pie charts and historical performance graphs.
*   **Drag and Drop:** Easily reorder your assets in the dashboard.
*   **Financial News:** Aggregates related news based on your portfolio.
*   **AI Financial Advisor:** Integrated AI Chatbot powered by Gemini for personalized financial advice and market insights.
*   **Export/Import:** Save your portfolio locally as a JSON file and restore it later.
*   **PDF Reports:** Generate printable summary reports of your current portfolio.
*   **Customization:** Dark/Light mode, Dynamic Backgrounds, and Heatmap visualizations.
*   **PWA Ready:** Installable on desktop and mobile devices for an app-like experience. Offline capabilities via Service Workers.

## 💻 Technologies Used

*   **Frontend Framework:** [Vue.js 3 (Global Build)](https://vuejs.org/)
*   **Styling:** [Tailwind CSS (via CDN)](https://tailwindcss.com/)
*   **Icons/Fonts:** Inter Font, SVGs, CryptoIcons, Logo.dev
*   **PWA:** Service Workers (`sw.js`), Web App Manifest (`manifest.json`)

## 🔌 Integrated APIs

The application aggregates data from various sources to provide accurate and up-to-date information:

*   **Exchangerate-API:** Currency exchange rates.
*   **CoinGecko API:** Cryptocurrency prices (Free tier, no CORS issues).
*   **Finnhub API:** NASDAQ stock quotes.
*   **Yahoo Finance (via CORS proxy):** BIST stock quotes and historical data.
*   **Google News RSS:** Fetches relevant financial news.
*   **Google Gemini API:** Powers the AI Financial Advisor chatbot.
*   **Custom Cloudflare Worker:** Specific API for fetching Turkish Gram Gold prices.

*Note: Some APIs require keys which are currently hardcoded in the source for demonstration purposes. In a production environment, these should be securely managed.*

## 🚀 How to Run

Since the application uses CDN links and is purely client-side, you don't need a complex build step to run it locally.

### Method 1: Direct File Open
You can simply open the `index.html` file in your modern web browser.
*(Note: Some PWA features like Service Workers might not work perfectly due to browser security restrictions on `file://` protocols).*

### Method 2: Local Web Server (Recommended)
To fully experience the PWA features (like installation and caching), serve the directory with a local web server.

If you have Python installed:
```bash
# Python 3
python -m http.server 8000
```

If you have Node.js and `npx` installed:
```bash
npx serve
```

Then, navigate to `http://localhost:8000` (or the port specified by your server) in your browser.

## 📱 PWA Installation

When served over HTTPS (or localhost), your browser should prompt you to install the application. You can also manually trigger the installation from the browser's address bar or the "Install App" button within the application header.

## ⚙️ Settings

The application stores your data and preferences locally in your browser using `localStorage`.
*   **Theme:** Toggle between dark and light modes.
*   **Visuals:** Enable/disable dynamic background animations, heatmaps, and asset logos.
*   **Currency:** Display your total portfolio value in TRY, USD, EUR, or PLN.
*   **Language:** Basic toggle between TR/EN (mostly affects settings UI).

## 📄 License

This project is open-source and available under the MIT License.
