import './HomeSectionVideo.css';
import teslaVid from '../../assets/tesla-vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslaVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Bienvenidos al mundo de la automatización</h1>
          <h5>Conoce nuestras aplicaciones</h5>
        </div>
        <div>
          <button>Aplicaciones</button>
        </div>
      </div>
    </div>
  );
}
