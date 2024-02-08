import './ImageBackgroundSection.css';
import { Link, useLocation } from "react-router-dom";

export default function ImageBackgroundSection({
  backgroundImage,
  header,
  description,
  featureItems = [],
}) {
  let location = useLocation();

  // Determinar el nombre y el enlace del botón dependiendo de la ruta actual
  let buttonName, buttonLink;
  if (location.pathname === '/contactenos') {
    buttonName = 'Menu';
    buttonLink = '/';
  } else {
    buttonName = 'Contactenos';
    buttonLink = '/contactenos';
  }

  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay" id="overlay2">
        <div className="top-section">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
        <div className="bottom-section">
          {featureItems.length > 0 && (
            <ul className="feature-items">
              {featureItems.map(({ title, description }) => (
                <li key={title}>
                  <h6>{title}</h6>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          )}
          <div>
            <Link to={buttonLink}>
              <button>{buttonName}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
