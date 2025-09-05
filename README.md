Stock Market Dashboard

A responsive Stock Market Dashboard built with HTML, CSS, and JavaScript.
It allows users to search for stocks, view live charts, company details, portfolio analytics, and export reports.

✨ Features

🔎 Search stocks by symbol or company name

📈 Interactive price chart (powered by Chart.js)

📰 Latest news simulation for selected stock

💼 Portfolio tracking with P/L calculation

📤 Export portfolio report as CSV

🔔 Real-time notifications when stock price crosses a threshold

🎨 Dark theme UI with responsive design

🛠️ Tech Stack

Frontend: HTML, CSS (custom + responsive), JavaScript

Charts: Chart.js

Live Charts: TradingView Widget

API: Alpha Vantage
 (free stock market data)

📂 Project Structure
stockmarket_dashboard/
│── index.html        # Main UI
│── style.css         # Styling
│── script.js         # Functionality (API calls, chart, notifications)

⚙️ Setup & Usage

Clone or download this repo:

git clone https://github.com/your-username/stockmarket_dashboard.git
cd stockmarket_dashboard/frontend


Open index.html in your browser.

Enter a stock symbol (e.g., AAPL, MSFT, TSLA) or a company name (e.g., Apple, Tesla) in the search bar.

View company details, stock chart, and portfolio analytics.

Click Export CSV to download a portfolio performance report.

🔑 API Key Setup

This project uses Alpha Vantage API.

Get your free API key from Alpha Vantage
.

Open script.js and replace:

const apiKey = 'YOUR_API_KEY';


⚠️ Note: Free Alpha Vantage plan allows 5 requests per minute & 500 per day. If you hit limits, consider upgrading or switching to another provider like Yahoo Finance API, Finnhub, or Polygon.io.

📸 Screenshots
Stock Search	Company Info	Portfolio

	
	
🚀 Future Improvements

✅ Switch to Yahoo Finance API for smoother searches

✅ Add authentication for user portfolios

✅ Real-time stock updates with WebSockets

✅ Deploy on Netlify or Vercel

👨‍💻 Author

Developed by Yash ✨
