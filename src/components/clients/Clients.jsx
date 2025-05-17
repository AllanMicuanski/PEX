import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import lanidor from '../../assets/clients/lanidor.webp';
import miik from '../../assets/clients/miik.webp';
import bunnies from '../../assets/clients/bunnies.png';
import intimissimi from '../../assets/clients/intimissimi.webp';
import osklen from '../../assets/clients/osklen.webp';

import './Clients.css';

const clientsData = [
  {
    id: 'lanidor',
    img: lanidor,
    title: 'Lanidor',
    text: 'A Sizebay entendeu nossos desafios de implantação e construiu soluções específicas para a nossa equipe de modelistas. A integração com nosso sistema foi excelente e exigiu pouquíssima intervenção da nossa equipe técnica.',
  },
  {
    id: 'miik',
    img: miik,
    title: 'Miik',
    text: 'Nossos clientes adoram a ferramenta, é a primeira coisa que comentam! A experiência tem sido muito positiva, e do nosso lado a comunicação com a Sizebay é excelente.',
  },
  {
    id: 'bunnies',
    img: bunnies,
    title: 'Bunnies JR',
    text: 'Queríamos uma solução fácil de usar e que representasse bem os valores da nossa marca. A Sizebay atendeu todas as nossas expectativas.',
  },
  {
    id: 'intimissimi',
    img: intimissimi,
    title: 'Intimissimi',
    text: 'O Provador Virtual ajuda muito nossos clientes a encontrarem o tamanho ideal de cada peça. Em um mercado onde cada marca possui suas medidas, ter uma ferramenta que auxilie e dê mais confiança ao consumidor na hora da compra é essencial. Sem falar no ganho que tivemos com o menor número de devoluções por conta do acerto na sugestão do tamanho dos produtos.',
  },
  {
    id: 'osklen',
    img: osklen,
    title: 'Osklen',
    text: 'O provador virtual ajuda homens e mulheres a comprarem de forma mais assertiva suas roupas online, melhorando a experiência de compra do cliente e nos ajuda a reduzir o índice de devolução. Estamos gostando bastante do produto!',
  },
];

function Clients() {
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
      <h2 className="clients-title">Clientes</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation
        loop={shouldLoop}
        className="clients-swiper"
      >
        {clientsData.map(({ id, img, title, text }) => (
          <SwiperSlide key={id}>
            <article className="client-card" tabIndex={0}>
              <img src={img} alt={`Logo da loja ${title}`} />
              <h3 className="client-name">{title}</h3>
              <p>{text}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Clients;
