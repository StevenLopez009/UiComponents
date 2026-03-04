import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import backgroundImage from "./assets/images/portada.jpg";
import backgroundImage2 from "./assets/images/portada2.jpg";
import perfilImage from "./assets/images/perfil.jpg";
import perfilImage2 from "./assets/images/perfil2.jpg";
import OrderTrackingTimeline from "./components/OrderTrackingTimeline/OrderTrackingTimeline";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import MonthlySpendingCard from "./components/MonthlySpendingCard/MonthlySpendingCard";
import ProductCardmui from "./components/ProductCard/ProductCardmui";
import BatteryStatus from "./components/BatteryStatus/BatteryStatus";
import StreakCounter from "./components/StreakCounter/StreakCounter";
import MultiTags from "./components/MultiTags/MultiTags";
import ProductCardTwo from "./components/ProductCardTwo/ProductCardTwo";
import productOne from "./assets/images/tenis0.jpg";
import productTwo from "./assets/images/tenis1.jpg";

function App() {
  const productImages = [productOne, productTwo];
  return (
    <>
      <ProductCardTwo
        productImages={productImages}
        productName="Nike Airforce1 Premium"
        description="Own the Airforce step back into classic hoops style with a durable leather"
        price={12000}
      />
      <MultiTags />
      <ProductCardmui />
      <ProductCardmui />
      <ProductCardmui />
      <BatteryStatus />
      <MonthlySpendingCard />
      <WeatherCard />
      <StreakCounter />

      <OrderTrackingTimeline
        order={new Date("2026-02-10")}
        shipping={new Date("2026-02-11")}
        transit={new Date("2026-02-11")}
        sentToCustomer={new Date("2026-03-20")}
      />
      <ProfileCard
        backgroundImage={backgroundImage}
        imageUrl={perfilImage2}
        name="Alex Turner"
        profession="Desarrollador"
        raiting={5}
        hours={76}
        months={2}
      />
      <ProfileCard
        backgroundImage={backgroundImage2}
        imageUrl={perfilImage}
        name="Lilly Gallagher"
        profession="Desingner"
        raiting={25}
        hours={99}
        months={12}
      />
    </>
  );
}

export default App;
