import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import lanidor from '/assets/clients/lanidor.webp';
import miik from '/assets/clients/miik.webp';
import bunnies from '/assets/clients/bunnies.png';
import intimissimi from '/assets/clients/intimissimi.webp';
import osklen from '/assets/clients/osklen.webp';


import './Clients.css';
import { useTranslation } from 'react-i18next';

const clientsData = [
  {
    id: 'lanidor',
    img: lanidor,
    link: 'https://sizebay.com/pt/blog/provador-virtual-lanidor-resultados/?new',
  },
  {
    id: 'miik',
    img: miik,
    link: 'https://sizebay.com/pt/blog/provador-virtual-miik-inc-como-a-loja-aumentou-o-ticket-medio-em-202/?new',
  },
  {
    id: 'bunnies',
    img: bunnies,
    link: 'https://sizebay.com/pt/blog/estudo-de-caso-bunniesjr/?new',
  },
  {
    id: 'intimissimi',
    img: intimissimi,
    link: 'https://sizebay.com/pt/blog/case-de-sucesso-intimissimi-aumenta-taxa-de-conversao-com-sizefit/?new',
  },
  {
    id: 'osklen',
    img: osklen,
    link: 'https://sizebay.com/pt/blog/case-osklen-aumenta-ticket-medio-em-19-com-uso-de-provador-virtual-sizefit/?new',
  },
];

function Clients() {
  const { t } = useTranslation();
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function updateSlidesPerView() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const shouldLoop = clientsData.length > slidesPerView;

  return (
    <section id="clients" className="clients-section">
      <div className="clients-wrapper">
        <h2 className="clients-title">{t('clients.title')}</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          loop={shouldLoop}
          className="clients-swiper"
        >
          {clientsData.map(({ id, img, link }) => (
            <SwiperSlide key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="client-card" tabIndex={0}>
                <img src={img} alt={`Logo da loja ${t(`clients.${id}.title`)}`} />
                <h3 className="client-name">{t(`clients.${id}.title`)}</h3>
                <p>{t(`clients.${id}.text`)}</p>
                <span className="client-link">{t('clients.readCase')}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clients;
