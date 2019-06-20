import React from 'react';
import TitleSection from '../TitleSection';

import './styles.scss';

const Contact = () => {
    const emoji = '😀';
    return (
        <section className="section section-contact">
            <TitleSection title="Contacto" />
            <p className="section__content">Si quieres contactar conmigo no dudes en hacerlo {emoji}.</p>
            <p className="section__content">Puedes hacerlo a través de los siguientes canales.</p>
            <ul className="contact__list">
                <li className="contact__item">
                    <a className="contact__link" href="mailto:irene@irenegf.com">
                        <span className="contact__image email"></span>
                    </a>
                </li>

                <li className="contact__item">
                    <a className="contact__link" href="https://github.com/irene-gomez" target="_blank" rel="noopener noreferrer">
                        <span className="contact__image github"></span>
                    </a>
                </li>

                <li className="contact__item">
                    <a className="contact__link" href="https://www.linkedin.com/in/irenegf/" target="_blank" rel="noopener noreferrer">
                        <span className="contact__image linkedin"></span>
                    </a>
                </li>

                <li className="contact__item">
                    <a className="contact__link" href="https://twitter.com/igf_osiris" target="_blank" rel="noopener noreferrer">
                        <span className="contact__image twitter"></span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
