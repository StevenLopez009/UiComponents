export interface WeatherResponse {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";
console.log("API KEY:", API_KEY);

export const getCurrentWeather = async (
  city: string,
): Promise<WeatherResponse> => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);

  if (!response.ok) {
    throw new Error("Error fetching weather data");
  }

  return response.json();
};
