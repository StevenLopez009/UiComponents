import { useEffect, useState } from "react";
import "./StreakCounter.css";

const StreakCounter = () => {
  const [streakDays, setStreakDays] = useState(0);
  const [accumulatedDays, setAccumulatedDays] = useState(0);
  const progress = (accumulatedDays / 10) * 100;
  const visits = JSON.parse(localStorage.getItem("visitedDays") || "[]");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const completedDays = visits.map((date: string) => {
    const dayIndex = new Date(date).getDay();
    const map = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return map[dayIndex];
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const visits = JSON.parse(localStorage.getItem("visitedDays") || "[]");

    if (!visits.includes(today)) {
      visits.push(today);
      localStorage.setItem("visitedDays", JSON.stringify(visits));
    }

    setAccumulatedDays(visits.length);

    const lastVisit = localStorage.getItem("lastVisit");
    let streak = Number(localStorage.getItem("streakDays")) || 0;

    if (!lastVisit) {
      streak = 1;
    } else {
      const diffDays = Math.floor(
        (new Date(today).getTime() - new Date(lastVisit).getTime()) /
          (1000 * 60 * 60 * 24),
      );

      if (diffDays === 1) {
        streak += 1;
      } else if (diffDays > 1) {
        streak = 1;
      }
    }

    localStorage.setItem("lastVisit", today);
    localStorage.setItem("streakDays", String(streak));

    setStreakDays(streak);
  }, []);

  return (
    <div className="streak-counter">
      <div className="streak-left">
        <div className="streak-icon">🔥</div>
        <p>{streakDays} days</p>
        <span>Steps streak</span>
      </div>
      <div className="streak-right">
        <div className="streak-progress-text">
          <span>{accumulatedDays}</span> / 10
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="week-container">
          {days.map((day) => (
            <div className="day-item" key={day}>
              <div
                className={`day-circle ${
                  completedDays.includes(day) ? "completed" : ""
                }`}
              />
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreakCounter;
