import React from "react";
import "../styles/weather.css";

const Weather = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    location: { name, region, country, localtime },
    current: {
      temp_c,
      condition,
      humidity,
      wind_kph,
      wind_dir,
      pressure_mb,
      feelslike_c,
      vis_km,
    },
  } = weatherData;

  return (
    <div className="weather-card">
      <h2>
        {name}, {region}, {country}
      </h2>
      <p className="localtime">Local Time: {localtime}</p>

      <div className="weather-info">
        <div className="weather-condition">
          <img src={condition.icon} alt={condition.text} />
          <p>{condition.text}</p>
        </div>
        <div className="weather-details">
          <p>
            <strong>Temperature:</strong> {temp_c}°C
          </p>
          <p>
            <strong>Feels Like:</strong> {feelslike_c}°C
          </p>
          <p>
            <strong>Humidity:</strong> {humidity}%
          </p>
          <p>
            <strong>Wind:</strong> {wind_kph} km/h {wind_dir}
          </p>
          <p>
            <strong>Pressure:</strong> {pressure_mb} mb
          </p>
          <p>
            <strong>Visibility:</strong> {vis_km} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
