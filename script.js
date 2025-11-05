
// DOM elements
const region = document.querySelector("#region");
const country = document.querySelector("#country");
const tz_id = document.querySelector("#tz_id");
const lat = document.querySelector("#latitude");
const lon = document.querySelector("#longitude");
const localtime = document.querySelector("#localtime");
const localtime_epoch = document.querySelector("#local_epo");

// Searching
let weatherData = null;
const input = document.querySelector("input");
const search = document.querySelector(".search");

search.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) {
    alert("⚠️ Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/weather?q=${city}`);
    const data = await response.json();

    if (data.error) {
      alert(`❌ ${data.error.message}`);
      return;
    }

    weatherData = data;
    console.log("✅ Fetched:", data);
    alert(`✅ Weather data loaded for ${city}`);
    updateCards();

  } catch (error) {
    console.error("❌ Fetch error:", error);
    alert("⚠️ Unable to fetch weather data. Please check your server or internet connection.");
  }
});

function updateCards() {
  if (!weatherData || !weatherData.location) {
    alert("⚠️ No weather data available to update.");
    return;
  }

  region.textContent = weatherData.location.region || "N/A";
  country.textContent = weatherData.location.country || "N/A";
  tz_id.textContent = weatherData.location.tz_id || "N/A";
  lat.textContent = weatherData.location.lat || "N/A";
  lon.textContent = weatherData.location.lon || "N/A";
  localtime.textContent = weatherData.location.localtime || "N/A";
  localtime_epoch.textContent = weatherData.location.localtime_epoch || "N/A";
}

