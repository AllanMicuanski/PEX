import React from 'react';
import './Vfr.css';
import Szbbtn from './szbbtn/Szbbtn';

const Vfr = () => {
  return (
    <section id="vfr" className="vfr-section">
      <h2 className="vfr-title">Provador Virtual</h2>

      <div className="vfr-container">
        {/* Produto 1 */}
        <div className="product-card">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSB7rhm9aoKQPKp6HdZvwHD2Ae9m3p20qXx1iOBI0xdoexPvxgZkgeqcKvWcGxA7tqFHq0VuXx1tgiZ81oj5aoXAaTZebXsErkthvh1uQrZUDF2q3f1EwVLNLFOFaWiXEMl9DlJKxCW&usqp=CAc"
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
       <Szbbtn/>
        </div>

        {/* Produto 2 */}
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqu0n6DFtIpTkkR4fKeUFeynM_ssdR0Ya02g&s"
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
       <Szbbtn/>
        </div>
      </div>
    </section>
  );
};

export default Vfr;
