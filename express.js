const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // allow requests from frontend

app.get("/weather", async (req, res) => {
  const { q } = req.query;
  console.log("Query:", q);

  if (!q) {
    return res.status(400).json({ error: "Please enter a city name" });
  }

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${q}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b8d827d839msh9a4e5b18ae80cc1p1157dejsn71ddc16daa08",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log("✅ Sending to frontend:", result.location.name);
    // ✅ Send JSON to the frontend
    res.json(result);

  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(port, () =>
  console.log(`✅ Server running on http://localhost:${port}`)
);
