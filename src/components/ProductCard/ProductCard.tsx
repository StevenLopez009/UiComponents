import "./ProductCard.css";
import imgPuddin from "../../assets/images/puddin.jpg";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__container">
        <img src={imgPuddin} alt="Puddin" className="product-card__image" />

        <div className="product-card__content">
          <div className="product-card__info">
            <div className="product-card__top">
              <h3 className="product-card__title">Whole Wheat Loaf</h3>
            </div>
            <p className="product-card__description">
              Nutritious, fiber-rich, and wholesome loaves.
            </p>
            <span className="product-card__price">$4.50</span>
          </div>
        </div>
        <div className="product-card__shop">
          <span className="product-card__stock product-card__stock--available">
            In Stock: 40
          </span>
          <button className="product-card__button">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
