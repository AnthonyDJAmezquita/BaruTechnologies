import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/model-s.jpg';


/* const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
]; */

export default function ModelSPage() {
  return (
    <div className="container" id='NoScroll'>
      <section className="section">
        <ImageBackgroundSection
          header="Sobre Nosotros"
          description="Somos un grupo de ingenieros en sistemas que decidieron emprender en el campo de la creación y venta de aplicaciones debido a su pasión por la tecnología y su habilidad para desarrollar software innovador. Su emprendimiento se enfoca en identificar necesidades del mercado y desarrollar aplicaciones que resuelvan problemas específicos o brinden entretenimiento de calidad. Estos ingenieros aplican sus conocimientos en programación, diseño de interfaces y experiencia de usuario para crear aplicaciones atractivas y funcionales. Además, están constantemente actualizándose en las últimas tendencias tecnológicas para ofrecer productos de alta calidad que satisfagan las demandas de sus clientes. Su objetivo es no solo desarrollar aplicaciones exitosas, sino también construir un negocio sostenible y escalable en la industria de la tecnología."
          backgroundImage={modelSImage}
          /*featureItems={featureItems}*/
        />
      </section>
      
    </div>
  );
}
