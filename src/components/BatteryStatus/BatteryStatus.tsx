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
      <div className="battery-header">
        <p className="battery-status">
          {charging ? "⚡ Charging..." : "🔌 Not charging"}
        </p>
        <p className="battery-info"> Batery Level : {level}%</p>
      </div>

      <div className="battery-scale">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>

      <div className="battery-bar">
        <div
          className={`battery-fill ${level > 20 ? "high" : "low"}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default BatteryStatus;
