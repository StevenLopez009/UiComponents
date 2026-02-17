import londonImg from "../../assets/images/london.jpg";
import newYorkImg from "../../assets/images/newyork.jpg";
import tokyoImg from "../../assets/images/tokio.jpg";
import sidneyImg from "../../assets/images/sidney.jpg";

import { useEffect, useState } from "react";
import {
  getCurrentWeather,
  type WeatherResponse,
} from "../../services/weatherService";
import "./WeatherCard.css";
import { MapPin, ChevronDown } from "lucide-react";

const cities = ["London", "New York", "Tokyo", "Sydney"];

const cityBackgrounds: Record<string, string> = {
  London: londonImg,
  "New York": newYorkImg,
  Tokyo: tokyoImg,
  Sydney: sidneyImg,
};

const WeatherCard = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState("London");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getCurrentWeather(selectedCity);
        setWeather(data);
      } catch (err) {
        setError("No se pudo obtener el clima.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  if (!weather) return null;

  return (
    <div
      className="weather-card"
      style={{
        backgroundImage: `url(${cityBackgrounds[selectedCity]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="location-select">
        <MapPin size={16} />

        <div className="custom-select">
          <div className="select-trigger" onClick={() => setIsOpen(!isOpen)}>
            <span>{selectedCity}</span>
            <ChevronDown
              size={16}
              className={`chevron ${isOpen ? "open" : ""}`}
            />
          </div>

          {isOpen && (
            <div className="dropdown">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <h1 className={!isOpen ? "" : "hidden-temp"}>
        {weather.current.temp_c}°
      </h1>

      <div className="weather-info">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <p>{weather.current.condition.text}</p>
      </div>

      <div>
        <p>💨 Wind: {weather.current.wind_kph} km/h</p>
        <p>💧 Humidity: {weather.current.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
