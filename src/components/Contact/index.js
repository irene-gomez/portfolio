import React from 'react';
import TitleSection from '../TitleSection';

import './styles.scss';

const Home = () => {
    return ( 
        <section className="section section-first">
            <TitleSection  title='Contacto' />
            <p className="content">¡Hola! Me llamo Irene y tras más de 8 años en el sector laboral del diseño gráfico y editorial decidí cambiar el rumbo de mi vida.</p>
        </section>
    );
}
 
export default Home;