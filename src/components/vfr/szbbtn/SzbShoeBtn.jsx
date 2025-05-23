import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Szbbtn.css';

// Componente do Modal
const ModalIframe = ({ src, title, onClose }) => {
  return ReactDOM.createPortal(
    <div className="vfr__container--backdrop" onClick={onClose}>
      <div className="vfr-app" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="100%"
        />
      </div>
    </div>,
    document.getElementById('modal-root') // ← usa a nova div que você adicionou no index.html
  );
};

// Botões que abrem o modal
const Szbbtn = () => {
  const [iframeType, setIframeType] = useState(null);

  const iframeData = {
    vfr: {
      src: "https://new-shoe-master.dse3qg8n6oln8.amplifyapp.com/?mode=vfr&id=7434461&sid=068CFE3F4C19797d2d3427374d96be236a8910fc183c&lang=br&tenantId=1039&pageProductImg=https://cdn.vnda.com.br/1920x/tupode/2025/03/12/14_26_32_364_14_3_7_794_a481f28b640e77ab981101c70ab7ec74.png?v=1741800397&backdropWidth=1449&backdropHeight=927&showBackdropLoading=true&sizeSystem=BR&isMeasurementsTableEnabled=true&brandsComparison=true",
      title: "Provador Virtual"
    },
    chart: {
      src: "https://measurements-table.sizebay.technology/?id=7434461&tenantId=1039&pageProductImg=https://cdn.vnda.com.br/1920x/tupode/2025/03/12/14_26_32_364_14_3_7_794_a481f28b640e77ab981101c70ab7ec74.png?v=1741800397&sid=068CFE3F4C19797d2d3427374d96be236a8910fc183c&sizeSystem=BR&lang=br",
      title: "Tabela de Medidas"
    }
  };

  return (
    <>
      <div className="shoe vfr-btns-container">
        <button className="shoe vfr-btn" onClick={() => setIframeType('vfr')}>
          <span className="icon" aria-hidden="true"></span>
          Provador Virtual
        </button>
        <button className="shoe chart-btn" onClick={() => setIframeType('chart')}>
          <span className="icon" aria-hidden="true"></span>
          Tabela de Medidas
        </button>
      </div>

      {iframeType && (
        <ModalIframe
          src={iframeData[iframeType].src}
          title={iframeData[iframeType].title}
          onClose={() => setIframeType(null)}
        />
      )}
    </>
  );
};

export default Szbbtn;
