import { useEffect, useState } from "react";
import { getCurrentWeather, type WeatherResponse } from "../../services/weatherService";


interface Props {
  city: string;
}

const WeatherCard = ({ city }: Props) => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getCurrentWeather(city);
        setWeather(data);
      } catch (err) {
        setError("No se pudo obtener el clima.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>
        {weather.location.name}, {weather.location.country}
      </h2>

      <h1>{weather.current.temp_c}°C</h1>

      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />

      <p>{weather.current.condition.text}</p>

      <div>
        <p>💨 Wind: {weather.current.wind_kph} km/h</p>
        <p>💧 Humidity: {weather.current.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
