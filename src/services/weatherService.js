import axios from "axios";

const API_KEY = "27b0a46e7c514fdd8e0151948242609"; // Replace with your WeatherAPI key
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
