import "./StreakCounter.css";

const StreakCounter = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const completedDays = ["Mon", "Tue", "Wed"];

  return (
    <div className="streak-counter">
      <div className="streak-left">
        <div className="streak-icon">🔥</div>
        <p>142 days</p>
        <span>Steps streak</span>
      </div>
      <div className="streak-right">
        <div className="streak-progress-text">
          <span>5863</span> / 8000
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "73%" }}></div>
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
