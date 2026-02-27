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
import UserForm from "./components/Form/UserForm";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item grid-item_1">
          <ProductCardmui />
          <ProductCardmui />
          <ProductCardmui />
          <BatteryStatus />
          <UserForm />
        </div>
        <div className="grid-item grid-item_2">
          <MonthlySpendingCard />
          <WeatherCard />
          <StreakCounter />
        </div>
        <div className="grid-item grid-item_3">
          <OrderTrackingTimeline
            order={new Date("2026-02-10")}
            shipping={new Date("2026-02-11")}
            transit={new Date("2026-02-11")}
            sentToCustomer={new Date("2026-03-20")}
          />
        </div>

        <div className="grid-item grid-item_4">
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
        </div>
      </div>
    </>
  );
}

export default App;
