import { useState } from "react";
import "./MonthlySpendingCard.css";

const initialCategories = [
  { id: 1, icon: "🚇", name: "Transport", amount: 0 },
  { id: 2, icon: "🏪", name: "Groceries", amount: 0 },
  { id: 3, icon: "📦", name: "Shopping", amount: 0 },
  { id: 4, icon: "🍽", name: "Food and drinks", amount: 0 },
  { id: 5, icon: "👩‍🍼", name: "Others", amount: 0 },
];

const MonthlySpendingCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const [activeId, setActiveId] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const total = categories.reduce(
    (acumulador, categoria) => acumulador + categoria.amount,
    0,
  );

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const handleAmountChange = (id: number, value: string) => {
    const numericValue = Number(value) || 0;

    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, amount: numericValue } : cat,
      ),
    );
  };

  return (
    <div className={`msc ${!isExpanded ? "msc--collapsed" : ""}`}>
      <div className="msc__head">
        <span className="msc__month">February 2026</span>
      </div>

      <div className="msc__amoun_total">
        <h2 className="msc__amount">{formatCurrency(total)}</h2>

        <button className="msc__toggle" onClick={toggleExpand}>
          <span
            className={`msc__arrow ${isExpanded ? "msc__arrow--open" : ""}`}
          >
            ▶
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="msc__list">
          {categories.map((cat) => {
            const percent =
              total > 0 ? ((cat.amount / total) * 100).toFixed(0) : 0;
            return (
              <div
                key={cat.id}
                className="msc__item"
                onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              >
                <div className="msc__item-left">
                  <span className="msc__icon">{cat.icon}</span>
                  <span className="msc__name">{cat.name}</span>
                </div>

                <div className="msc__item-right">
                  <span className="msc__percent">{percent}%</span>
                  <span className="msc__chev">›</span>
                </div>

                {activeId === cat.id && (
                  <div
                    className="msc__edit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="text"
                      className="msc__input"
                      value={cat.amount}
                      onChange={(e) =>
                        handleAmountChange(cat.id, e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setActiveId(null);
                        }
                      }}
                      placeholder="Enter amount"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MonthlySpendingCard;
