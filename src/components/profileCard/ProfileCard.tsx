import './ProfileCard.css'
import { Star, Flag, Clock } from "lucide-react";

// Define la interfaz para las props
interface Props {
  backgroundImage: string;
  imageUrl?: string; 
  name?: string;      
  profession?: string; 
  raiting?: number;   
  hours?: number;
  months?: number;
}

function ProfileCard({ backgroundImage, imageUrl, name, profession, raiting, hours, months }: Props) {
  return (
  <article className="profile-card">
    <div
      className="profile-card__cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <figure className="profile-card__avatar-section">
      <img
        src={imageUrl}
        alt="Liam O'Connor profile"
        className="profile-card__avatar"
      />
      <button className="profile-card__tag-btn">
        Sketch
      </button>
    </figure>
    <section className="profile-card__body">
      <header className="profile-card__header">
        <div className="profile-card__info">
          <h2 className="profile-card__name">
            {name}
          </h2>
          <p className="profile-card__role">
            {profession}
          </p>
        </div>

        <button className="profile-card__bookmark">
          <Flag size={18} />
        </button>
      </header>
      <section className="profile-card__stats">

        <div className="profile-card__stat">
          <Star size={16} className="profile-card__icon profile-card__icon--yellow" />
          <div>
            <p className="profile-card__value">{raiting}</p>
            <span className="profile-card__label">Rating</span>
          </div>
        </div>

        <div className="profile-card__stat">
          <Flag size={16} className="profile-card__icon profile-card__icon--blue" />
          <div>
            <p className="profile-card__value">{hours}</p>
            <span className="profile-card__label">Hours</span>
          </div>
        </div>

        <div className="profile-card__stat">
          <Clock size={16} className="profile-card__icon profile-card__icon--purple" />
          <div>
            <p className="profile-card__value">{months}</p>
            <span className="profile-card__label">Month</span>
          </div>
        </div>
      </section>
    <footer className="profile-card__footer">
      <button className="profile-card__contact-btn">
        Get In Touch
      </button>
    </footer>

  </section>
</article>

  )
}

export default ProfileCard;