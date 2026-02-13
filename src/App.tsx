import './App.css'
import ProfileCard from './components/profileCard/ProfileCard'
import backgroundImage from './assets/images/portada.jpg'
import backgroundImage2 from './assets/images/portada2.jpg'
import perfilImage from './assets/images/perfil.jpg'
import perfilImage2 from './assets/images/perfil2.jpg'
import OrderTrackingTimeline from './components/OrderTrackingTimeline/OrderTrackingTimeline'

function App() {
  return (
    <div className='app'>
      <OrderTrackingTimeline 
        order={new Date("2026-02-10")}
        shipping={new Date("2026-02-11")}
        transit={new Date("2026-02-11")}
        sentToCustomer={new Date("2026-02-12")}
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
    </div>
  )
}

export default App
