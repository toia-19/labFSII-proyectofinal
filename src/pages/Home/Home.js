import React from 'react';

import './Home.css';

// COMPONENTES
import Carrusel from '../../components/Carrusel/Carrusel';

import { Divider } from 'primereact/divider';

function Home() {
  return (
    <div className='Home'>
      <h1 className='titulo'>- Clave de Sol -</h1>

      <div className="pantalla1">
        <section className='seccion-aside'>
          <h2 className='subtitulo'>Nuestras redes</h2>

          <Divider />
          <p>
            Instagram: clavedesolofficial
          </p>

          <Divider />
          <p>
            Twitter: clavedesolofficial
          </p>

          <Divider />
          <p>
            WhatsApp: 299635123
          </p>

          <Divider />
          <p>
            Youtube: clavedesolofficial
          </p>

          <Divider />
          <p>
            Correo: clavedesolofficial@gmail.com
          </p>

          <Divider />
          <h2 className='subtitulo'>¡Seguinos!</h2>
        </section>

        <section className='seccion-principal'>
          <img id='img-carrusel' src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </section>
      </div>

      <div className='pantalla2'>
        <section className='seccion-bottom'>
          <h2 className='subtitulo'>Lo que podés encontrar...</h2>
          <Carrusel />
        </section>
      </div>
    </div>
  );
};

export default Home;