import React from 'react';
import './Vfr.css';
import SzbShoeBtn from './szbbtn/SzbShoeBtn';
import SzbCloethestBtn from './szbbtn/SzbCloethestBtn';

const Vfr = () => {
  return (
    <section id="vfr" className="vfr-section">
      <h2 className="vfr-title">Provador Virtual</h2>

      <div className="vfr-container">
        {/* Produto 1 */}
        <div className="product-card">
          <img
            src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/qfificra/camiseta-nike-sb-large-logo-black.jpeg"
            alt="Camiseta Nike"
          />
          <h3>Camiseta Nike</h3>
          <p className="product-subtitle">Tamanhos disponíveis:</p>
          <ul className="size-list">
            <li>P</li>
            <li>M</li>
            <li>G</li>
            <li>GG</li>
          </ul>
       <SzbCloethestBtn/>
        </div>

        {/* Produto 2 */}
        <div className="product-card">
          <img
            src="https://cdn.vnda.com.br/1920x/tupode/2025/03/12/14_26_32_364_14_3_7_794_a481f28b640e77ab981101c70ab7ec74.png?v=1741800397"
            alt="Tênis Nike"
          />
          <h3>Tênis Nike</h3>
          <p className="product-subtitle">Tamanhos disponíveis:</p>
          <ul className="size-list">
            <li>38</li>
            <li>40</li>
            <li>42</li>
            <li>44</li>
          </ul>
       <SzbShoeBtn/>
        </div>
      </div>
    </section>
  );
};

export default Vfr;
