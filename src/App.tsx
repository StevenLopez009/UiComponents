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

function App() {
  return (
    <div className="app">
      <div className="app-container__1">
        <ProductCardmui />
        <ProductCardmui />
        <ProductCardmui />
        <BatteryStatus />
      </div>
      <div className="app-container__2">
        <MonthlySpendingCard />
        <WeatherCard />
      </div>
      <div className="app-container__3">
        <OrderTrackingTimeline
          order={new Date("2026-02-10")}
          shipping={new Date("2026-02-11")}
          transit={new Date("2026-02-11")}
          sentToCustomer={new Date("2026-03-20")}
        />
      </div>
      <div className="app-container__4">
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
      <div className="app-container__5"></div>
    </div>
  );
}

export default App;
