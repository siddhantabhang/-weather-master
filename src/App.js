import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Footer from "./components/Footer"; // Import Footer
import "./styles/App.css";
import { fetchWeatherData } from "./services/weatherService";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  return (
    <div className="app">
      <header>
        <h1>WeatherMaster</h1>
      </header>
      <main>
        <Search onSearch={fetchWeather} />
        <Weather weatherData={weatherData} />
      </main>
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
};

export default App;
