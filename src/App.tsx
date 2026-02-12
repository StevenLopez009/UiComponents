import './App.css'
import ProfileCard from './components/profileCard/ProfileCard'
import backgroundImage from './assets/images/portada.jpg'
import backgroundImage2 from './assets/images/portada2.jpg'
import perfilImage from './assets/images/perfil.jpg'
import perfilImage2 from './assets/images/perfil2.jpg'

function App() {
  return (
    <>
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
        name="Liam Gallagher"
        profession="Desingner"
        raiting={25}
        hours={99}
        months={12}
      />
    </>
  )
}

export default App
