🌦️ WeatherApp

A simple yet powerful weather application built using HTML, CSS, JavaScript, and a custom Express.js backend.
It fetches live weather details for any city using the WeatherAPI (via RapidAPI) and dynamically updates the UI.

🚀 Features

✅ Search weather data by city name (dynamic input)
✅ Fetch weather details via custom Express backend
✅ Displays:

Region

Country

Latitude & Longitude

Timezone (TZ_ID)

Local time and localtime epoch

✅ Built with Bootstrap for responsive UI
✅ Uses async/await for smooth API calls
✅ Error handling for invalid city names or connection issues
✅ CORS-enabled backend for local frontend-backend communication

🧩 Tech Stack

Frontend: HTML, CSS (Bootstrap), JavaScript
Backend: Node.js + Express.js
API Source: WeatherAPI.com (via RapidAPI)

⚙️ Setup & Run Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/WeatherApp.git
cd WeatherApp

2️⃣ Install dependencies
npm install express cors


(If you’re on Node.js v18+, fetch() is built-in — no need for node-fetch.)

3️⃣ Start the backend server
node express.js


You should see:

✅ Server running on http://localhost:3000

4️⃣ Run the frontend

Open index.html using Live Server (VS Code extension)
or simply open it in your browser.

The frontend runs at:

http://127.0.0.1:5500


Enter a city name and click Search.

🧠 How it works

The frontend sends a request to your backend:

http://localhost:3000/weather?q=Delhi


The Express backend calls the WeatherAPI with your RapidAPI key.

The backend returns JSON data with city weather details.

The frontend displays it dynamically inside Bootstrap cards.

💡 Example Response
{
  "location": {
    "name": "New Delhi",
    "region": "Delhi",
    "country": "India",
    "lat": 28.6,
    "lon": 77.2,
    "tz_id": "Asia/Kolkata",
    "localtime": "2025-11-05 11:41"
  },
  "current": {
    "temp_c": 26.2,
    "condition": {
      "text": "Mist"
    }
  }
}

🧰 Folder Structure
WeatherApp/
│
├── express.js          # Express backend server
├── script.js           # Frontend JS (API calls + DOM updates)
├── index.html          # Main UI
├── style.css           # Optional styling
├── package.json        # Node.js dependencies
└── README.md           # Project documentation

🧑‍💻 What You Learned / Implemented

Setting up an Express.js server

Using query parameters (req.query.q)

Handling CORS for cross-origin requests

Using Fetch API with async/await

Connecting frontend to backend dynamically

Displaying real API data on a responsive UI

🌐 Future Improvements

🚀 Add temperature and weather condition display
🌙 Add icons for clear, cloudy, mist, etc.
📍 Detect user’s current location automatically
💾 Save last searched cities
🎨 Improve styling with animations or gradients

Initial Phase : 
<img width="1913" height="915" alt="image" src="https://github.com/user-attachments/assets/80006b99-b85a-45f9-8c5b-7e6e45e56d21" />
