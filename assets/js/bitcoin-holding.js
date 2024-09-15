document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.coindesk.com/v1/bpi/currentprice/ZAR.json")
    .then((response) => response.json())
    .then((data) => {
      const btcRateZAR = data.bpi.ZAR.rate_float;
      const btcHoldings = 0.09669008; // Example BTC holdings
      const btcValueZAR = btcRateZAR * btcHoldings;
      const btcChange30d = 0.000159; // Example 7-day change
      const btcChange1y = 0.09669008; // Example 30-day change

      // Format Bitcoin value with commas
      const formattedBtcValue = btcValueZAR.toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      });
      const formattedChange7dValue = (btcChange30d * btcRateZAR).toLocaleString(
        "en-ZA",
        { style: "currency", currency: "ZAR" }
      );
      const formattedChange30dValue = (btcChange1y * btcRateZAR).toLocaleString(
        "en-ZA",
        { style: "currency", currency: "ZAR" }
      );

      // Format and display values
      document.getElementById("btcHoldings").textContent = btcHoldings + " BTC";
      document.getElementById("btcValue").textContent = formattedBtcValue;
      document.getElementById("change7d").textContent =
        (btcChange30d >= 0 ? "+" : "") + btcChange30d.toFixed(8) + " BTC";
      document.getElementById("change7dValue").textContent =
        formattedChange7dValue;
      document.getElementById("change30d").textContent =
        (btcChange1y >= 0 ? "+" : "") + btcChange1y.toFixed(8) + " BTC";
      document.getElementById("change30dValue").textContent =
        formattedChange30dValue;
    });
});
