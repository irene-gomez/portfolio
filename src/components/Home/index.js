import React from 'react';
import avatar from '../../img/avatar.jpeg'

import './styles.scss';

const technicalSkills = ['javascript', 'react', 'sass', 'css3', 'html5', 'gulp', ];
const scrumSkills = ['agile', ' scrum', 'git', 'github', 'trello', 'slack', ];
const softwareSkills = ['visual studio code', 'zeplin', 'photoshop', 'illustrator'];

const Home = () => {
    return ( 
        <section className="section section-first">
            <div className="wrapper__description">
                <div className="wrapper__image">
                    <img className="section__image" src={avatar} alt="Foto Irene Gómez"/>
                </div>
                {/* <div className="section__image" /> */}
                <div className="wrapper__text">
                    <p className="section__content--greeting">¡Hola!</p>
                    <p className="section__content">Me llamo Irene y tras más de 8 años en el sector laboral del diseño gráfico y editorial decidí cambiar el rumbo de mi vida.</p>
                    <p className="section__content">Durante estos años tuve la oportunidad de hacer trabajos relacionados con el diseño web y la programación. Tras intentar evolucionar progresivamente, decidí arriesgar para conseguir convertirme en programadora.</p>
                    <p className="section__content">Estar en Adalab me ha permitido entrar de lleno en contacto con un mundo que antes solo podía mirar desde fuera.</p>
                    <p className="section__content">Mi perfil actual se complementa con mis experiencias anteriores que suman a lo que soy como profesional y como persona.</p>
                </div>
            </div>
            <h3 className="section__subtitle">Habilidades</h3>
            <div className="wrapper__skills">
                <ul className="skills-technical">
                    {technicalSkills.map((techSkill, index) => (
                        <li key={index} className="skills__item tech">{techSkill}</li>
                    ))}
                </ul>
                <ul className="skills-scrum">
                    {scrumSkills.map((scrumSkill, index) => (
                        <li key={index} className="skills__item scrum">{scrumSkill}</li>
                    ))}
                </ul>
                <ul className="skills-software">
                    {softwareSkills.map((softwareSkill, index) => (
                        <li key={index} className="skills__item software">{softwareSkill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Home;