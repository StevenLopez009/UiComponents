import { useEffect, useState } from "react";
import "./BatteryStatus.css";

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
}

const BatteryStatus = () => {
  const [level, setLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    let battery: BatteryManager;

    const handleChange = () => {
      setLevel(Math.round(battery.level * 100));
      setCharging(battery.charging);
    };

    if ("getBattery" in navigator) {
      (navigator as any).getBattery().then((bat: BatteryManager) => {
        battery = bat;
        handleChange();

        battery.addEventListener("levelchange", handleChange);
        battery.addEventListener("chargingchange", handleChange);
      });
    }

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
      }
    };
  }, []);

  if (level === null) {
    return <p>No disponible</p>;
  }

  return (
    <div className="battery-container">
      <p>Batería: {level}%</p>
      <div className="battery-bar">
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            backgroundColor: level > 20 ? "green" : "red",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      <p>{charging ? "⚡ Cargando" : "🔌 No cargando"}</p>
    </div>
  );
};

export default BatteryStatus;
