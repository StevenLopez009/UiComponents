// MonthlySpendingCard.jsx
import React, { useState } from "react";
import "./MonthlySpendingCard.css";

const MonthlySpendingCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Datos quemados según la imagen
  const categories = [
    { id: 1, icon: "🚇", name: "Transport", percent: 18 },
    { id: 2, icon: "🏪", name: "Groceries", percent: 32 },
    { id: 3, icon: "📦", name: "Shopping", percent: 27 },
    { id: 4, icon: "🍽", name: "Food and drinks", percent: 14 },
    { id: 5, icon: "👩‍🍼", name: "Others", percent: 9 },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`msc ${!isExpanded ? "msc--collapsed" : ""}`}>
      <div className="msc__head">
        <span className="msc__month">October 2024</span>
      </div>
      <div className="msc__amoun_total">
        <h2 className="msc__amount">{formatCurrency(4578)}</h2>
        <button className="msc__toggle" onClick={toggleExpand}>
          <span
            className={`msc__arrow ${isExpanded ? "msc__arrow--open" : ""}`}
          >
            ▶
          </span>
        </button>
      </div>

      <div className="msc__trend">
        <span className="msc__badge">22% less</span>
        <span className="msc__trend-text">than last month</span>
      </div>

      {isExpanded && (
        <div className="msc__list">
          {categories.map((cat) => (
            <div key={cat.id} className="msc__item">
              <div className="msc__item-left">
                <span className="msc__icon">{cat.icon}</span>
                <span className="msc__name">{cat.name}</span>
              </div>

              <div className="msc__item-right">
                <span className="msc__percent">{cat.percent}%</span>
                <span className="msc__chev">›</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthlySpendingCard;
