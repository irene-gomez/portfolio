import React from 'react';
import TitleSection from '../TitleSection';
import ContactItem from '../ContactItem';

import './styles.scss';

const Contact = () => {
    const emoji = '😀';
    return (
        <section className="section section-contact">
            <TitleSection title="Contacto" />
            <p className="section__content">Si quieres contactar conmigo no dudes en hacerlo {emoji}.</p>
            <p className="section__content">Puedes hacerlo a través de los siguientes canales.</p>
            <ul className="contact__list">
                <ContactItem 
                    hrefInfo='mailto:irene@irenegf.com?subject=Contacto web'
                    icon='email'
                />
                <ContactItem 
                    hrefInfo='https://github.com/irene-gomez'
                    icon='github'
                />
                <ContactItem 
                    hrefInfo='https://www.linkedin.com/in/irenegf/'
                    icon='linkedin'
                />
                <ContactItem 
                    hrefInfo='https://twitter.com/igf_osiris'
                    icon='twitter'
                />
            </ul>
        </section>
    );
};

export default Contact;
