import React from 'react';

import './Popular.css';

function Popular() {
  return (
    <div className='Popular'>
      <h1 className='titulo'>Los más escuchados</h1>

      <div className='info'>
        <div className='info-i'>
          <h3>TOP 1</h3>
          <h4>Eyes Without A Face - Billy Idol</h4>

          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0pUVeEgZuNyFzIMKp67RbS?utm_source=generator&theme=0"
            width="70%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>

        <div className='info-i'>
          <h3>TOP 2</h3>
          <h4>Canción Animal - Soda Stereo</h4>

          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6PqMi24DPibrFj9Ioc4hKL?utm_source=generator&theme=0"
            width="70%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>

        <div className='info-i'>
          <h3>TOP 3</h3>
          <h4>Shut up My Moms Calling - Hotel Ugly</h4>

          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3hxIUxnT27p5WcmjGUXNwx?utm_source=generator&theme=0"
            width="70%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Popular;