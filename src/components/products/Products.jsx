import React from 'react';
import Product from '../product/Product';
import './Products.css';
import cybertruckImage from '../../assets/15630.jpg';
import modelSImage from '../../assets/20716.jpg';
import modelXImage from '../../assets/58761.jpg';
import modelZImage from '../../assets/13487.jpg';

const products = [
  {
    id: 1,
    image: cybertruckImage,
    title: 'Battle-Log',
    description: 'Aplicacion de conteo de puntos en combates deportivos',
    price: 19.99,
  },
  {
    id: 2,
    image: modelSImage,
    title: 'Tienda Virtual',
    description: ' permite a los usuarios comprar productos y servicios desde la comodidad de sus hogares.',
    price: 29.99,
  },
  {
    id: 3,
    image: modelXImage,
    title: 'Gestor de resgistros contables',
    description: 'Aplicación pensada para responsable de el registro contable de entidades',
    price: 39.99,
  },
  {
    id: 4,
    image: modelZImage,
    title: 'Creación de aplicaciones web',
    description: 'Creación de aplicaciones web personalizadas para negocios u otros asuntos que se solicite',
    price: 39.99,
  },

];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          //price={product.price}
        />
      ))}
    </div>
  );
}
