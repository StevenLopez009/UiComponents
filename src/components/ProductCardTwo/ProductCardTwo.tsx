import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductCardTwo.css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

interface ProductProps {
  productImages: string[];
  productName: string;
  description: string;
  price: number;
}
const ProductCardTwo = ({
  productImages,
  productName,
  description,
  price,
}: ProductProps) => {
  return (
    <div className="card">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        {productImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="image Product" className="card_img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card_info">
        <div className="card__info--product">
          <h3 className="card__title">{productName}</h3>
          <p className="card__description">{description}</p>
        </div>

        <div className="card__footer">
          <button className="card__price">{price}</button>
          <button className="card__button">Buy Now ↗</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
