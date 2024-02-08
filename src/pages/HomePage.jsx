import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/model-s.jpg';
import modelXImage from '../assets/model-x.jpg';
import cybertruckImage from '../assets/coding.jpg';

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
      <section className="section" id='section4'>
        <ImageBackgroundSection
          header="Nuestras habilidades"
          description="Somos un equipo de programadores, capaz de programar en múltiples plataformas. Nuestro equipo tiene la capacidad de adaptarse a las necesidades cambiantes del mercado y de los clientes, pudiendo desarrollar aplicaciones web, de escritorio y móviles según lo requiera el proyecto. Esta versatilidad no solo amplía las oportunidades de negocio, sino que también nos permite ofrecer soluciones integrales a nuestros clientes, brindando un valor añadido significativo. Además, nuestro equipo de programadores con esta habilidad demuestra una comprensión profunda de los principios de programación y una capacidad para aprender y adaptarse a nuevas tecnologías, lo que nos hace altamente valiosos en el competitivo mundo del desarrollo de software."
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Experiencia"
          description="Nuestro equipo de programación cuenta con una amplia experiencia laboral en diversos puestos dentro del ámbito de la tecnología. Hemos trabajado como analistas de sistemas, QA, fullstack developers e incluso como project managers, lo que nos ha brindado una visión integral de los proyectos en los que hemos participado.
Además, tenemos un sólido dominio de múltiples lenguajes de programación, incluyendo Python, C, React, Java, Node.js, .NET, entre muchos otros. Esta versatilidad nos ha permitido adaptarnos a las necesidades específicas de cada proyecto, garantizando soluciones técnicas de alta calidad.
Nuestra experiencia laboral incluye colaboraciones con empresas multinacionales de renombre, como Tigo, Millicom y muchas otras. Esta trayectoria nos ha brindado la oportunidad de trabajar en entornos altamente exigentes, donde hemos demostrado nuestra capacidad para enfrentar desafíos tecnológicos a gran escala.
Estamos comprometidos con la excelencia técnica y la satisfacción del cliente, y estamos seguros de que podemos aportar un gran valor a cualquier proyecto en el que participemos."
          backgroundImage={cybertruckImage}
        />
      </section>
    </div>
  );
}
