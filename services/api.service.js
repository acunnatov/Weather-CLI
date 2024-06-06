import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";
import axios from "axios";


const getIcons = (icon) => {
    const icons = {
      '01d': '☀️', '01n': '🌑',
      '02d': '⛅️', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧', '09n': '🌧',
      '10d': '🌦', '10n': '🌧',
      '11d': '🌩', '11n': '🌩',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫', '50n': '🌫'
    };
    return icons[icon] || '';
  };

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("API doesn't exist,  -t [API_KEY] for saving token");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather,getIcons };
