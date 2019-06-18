import React from 'react';
import './styles.scss';
import Menu from '../Menu';
import TitleSection from '../TitleSection';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsMenu: ['Sobre mí', 'Proyectos', 'Contacto'],
        }
    }

    render() {
        const { itemsMenu } = this.state;
        return (
            <div className="App">
                <header>
                    <Menu itemsMenu={itemsMenu}/>
                </header>
                <main className="main-content">
                    <section className="section section-first">
                        <TitleSection  title='Sobre mi' />
                        <p className="content">¡Hola! Me llamo Irene y tras más de 8 años en el sector laboral del diseño gráfico y editorial decidí cambiar el rumbo de mi vida.</p>
                        <p className="content">Durante estos años tuve la oportunidad de hacer trabajos relacionados con el diseño web y la programación. Tras intentar evolucionar progresivamente, decidí arriesgar para conseguir convertirme en programadora.</p>
                        <p className="content">Estar en Adalab me ha permitido entrar de lleno en contacto con un mundo que antes solo podía mirar desde fuera.</p>
                        <p className="content">Mi perfil actual se complementa con mis experiencias anteriores que suman a lo que soy como profesional y como persona.</p>

                    </section>
                </main>
            </div>
        );
    }
}

export default App;
