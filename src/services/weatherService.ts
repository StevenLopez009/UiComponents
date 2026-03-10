import { apiClient } from "../api/apiClient";

const WEATHER_BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

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

export const WeatherService = {
  getCurrent: (city: string): Promise<WeatherResponse> => {
    return apiClient<WeatherResponse>(
      WEATHER_BASE_URL,
      "/current.json",
      {},
      {
        key: API_KEY,
        q: city,
        lang: "es",
      },
    );
  },
};
