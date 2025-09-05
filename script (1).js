
if ('Notification' in window && Notification.permission !== 'granted') {
  Notification.requestPermission();
}

function notifyPrice(symbol, price) {
  if (Notification.permission === 'granted') {
    new Notification(`📢 ${symbol} hit $${price}`);
  }
}


const apiKey = '7LQ8UC1O041BTP6G';



// ✅ Render Chart
let chartInstance = null;
function renderChart(labels, data) {
  const ctx = document.getElementById('priceChart').getContext('2d');

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Close Price (USD)',
        data,
        borderColor: '#00bcd4',
        fill: false,
        tension: 0.2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        x: { display: true },
        y: { display: true }
      }
    }
  });
}

function validateChartConfig(config) {
  if (!config.symbol || typeof config.symbol !== "string") {
    console.error("Invalid symbol in chart config");
    return false;
  }
  // Add more checks as needed
  return true;
}


// ✅ Render News
function renderNews(newsItems) {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = '';
  newsItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    newsList.appendChild(li);
  });
}

// ✅ Portfolio for CSV export
let portfolio = [
  { symbol: 'AAPL', qty: 10, avgPrice: 150 },
  { symbol: 'TSLA', qty: 5, avgPrice: 700 }
];

// ✅ Export CSV (with live prices)
async function exportCSV() {
  let csv = "Symbol,Quantity,Avg Price,Current Price,Profit/Loss\n";

  for (const p of portfolio) {
    try {
      const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${p.symbol}&apikey=${apiKey}`);
      const data = await res.json();
      const currentPrice = parseFloat(data["Global Quote"]["05. price"]);
      const profitLoss = ((currentPrice - p.avgPrice) * p.qty).toFixed(2);

      csv += `${p.symbol},${p.qty},${p.avgPrice},${currentPrice.toFixed(2)},${profitLoss}\n`;
    } catch (error) {
      console.error(`Failed to fetch data for ${p.symbol}`, error);
      csv += `${p.symbol},${p.qty},${p.avgPrice},Error,Error\n`;
    }
  }

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `portfolio_report_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
}
