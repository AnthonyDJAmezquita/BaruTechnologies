import './HomeSectionVideo.css';
import teslaVid from '../../assets/tesla-vid.mp4';
import { Link } from "react-router-dom";

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslaVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className='typewriter'>
          <h1>Bienvenidos al mundo de la automatización</h1>
          <h5>Conoce nuestras aplicaciones</h5>
        </div>
        <div>
		<Link to={"/shop" }>
          <button>Aplicaciones</button>
		</Link>
        </div>

      </div>
    </div>
  );
}
