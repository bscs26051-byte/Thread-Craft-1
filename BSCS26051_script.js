// ---------- Home page: welcome alert + current year ----------
window.onload = function () {
  if (window.location.href.includes("BSCS26051_Home.html")) {
    alert("Welcome!");

    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
      yearSpan.innerText = new Date().getFullYear();
    }
  }
};

// ---------- Products page: stock availability ----------
// (true = In Stock, false = Out of Stock)
const stockData = {
  1: true,
  2: true,
  3: false,
  4: true,
  5: true
};

function checkAvailability(productId) {
  const stockElement = document.getElementById("stock" + productId);

  if (stockData[productId]) {
    stockElement.textContent = "In Stock";
    stockElement.className = "stock-status status-in";
  } else {
    stockElement.textContent = "Out of Stock";
    stockElement.className = "stock-status status-out";
  }
}