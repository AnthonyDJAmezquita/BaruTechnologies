import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelXImage from '../assets/model-x.jpg';


/* const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
];
 */
export default function ModelXPage() {
  return (
    <div className="container" id='NoScroll'>
      <section className="section">
        <ImageBackgroundSection
          header="Nuestras habilidades"
          description="Somos un equipo de programadores, capaz de programar en múltiples plataformas. Nuestro equipo tiene la capacidad de adaptarse a las necesidades cambiantes del mercado y de los clientes, pudiendo desarrollar aplicaciones web, de escritorio y móviles según lo requiera el proyecto. Esta versatilidad no solo amplía las oportunidades de negocio, sino que también nos permite ofrecer soluciones integrales a nuestros clientes, brindando un valor añadido significativo. Además, nuestro equipo de programadores con esta habilidad demuestra una comprensión profunda de los principios de programación y una capacidad para aprender y adaptarse a nuevas tecnologías, lo que nos hace altamente valiosos en el competitivo mundo del desarrollo de software."
          backgroundImage={modelXImage}
          /*featureItems={featureItems}*/
        />
      </section>
    </div>
  );
}
