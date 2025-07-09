import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();
  const iframeData = {
    vfr: {
      src: "https://vfr-v3-production.sizebay.technology/V4/?mode=vfr&id=6834311&sid=06880E263BCB4b8077ebb5f44646aa198a216682a13b&lang=br&pageProductImg=https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/qfificra/camiseta-nike-sb-large-logo-black.jpeg&tenantId=1039&configProfile=infoBox&backdropWidth=1920&backdropHeight=927&showBackdropLoading=true&sizeSystem=BR",
      title: t('vfr.modalTry')
    },
    chart: {
      src: "https://vfr-v3-production.sizebay.technology/V4/?mode=chart&id=6834311&sid=06880E263BCB4b8077ebb5f44646aa198a216682a13b&lang=br&pageProductImg=https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/qfificra/camiseta-nike-sb-large-logo-black.jpeg&tenantId=1039&configProfile=infoBox&backdropWidth=1449&backdropHeight=927&showBackdropLoading=true&sizeSystem=BR",
      title: t('vfr.modalChart')
    }
  };

  return (
    <>
      <div className="vfr-btns-container">
        <button className="vfr-btn" onClick={() => setIframeType('vfr')}>
          <span className="icon" aria-hidden="true"></span>
          {t('vfr.btnTry')}
        </button>
        <button className="chart-btn" onClick={() => setIframeType('chart')}>
          <span className="icon" aria-hidden="true"></span>
          {t('vfr.btnChart')}
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
