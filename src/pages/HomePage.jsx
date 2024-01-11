import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/model-s.jpg';
import modelXImage from '../assets/model-x.jpg';
import cybertruckImage from '../assets/cybertruck.jpg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Sobre nosotros"
          description="Somos un grupo de ingenieros en sistemas que decidieron emprender en el campo de la creación y venta de aplicaciones debido a su pasión por la tecnología y su habilidad para desarrollar software innovador. Su emprendimiento se enfoca en identificar necesidades del mercado y desarrollar aplicaciones que resuelvan problemas específicos o brinden entretenimiento de calidad. Estos ingenieros aplican sus conocimientos en programación, diseño de interfaces y experiencia de usuario para crear aplicaciones atractivas y funcionales. Además, están constantemente actualizándose en las últimas tendencias tecnológicas para ofrecer productos de alta calidad que satisfagan las demandas de sus clientes. Su objetivo es no solo desarrollar aplicaciones exitosas, sino también construir un negocio sostenible y escalable en la industria de la tecnología."
          backgroundImage={modelSImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruckImage}
        />
      </section>
    </div>
  );
}
