import React from 'react';
import ReactGA from 'react-ga';
import { initGA } from '../../services/reactGA';
import TitleSection from '../TitleSection';
import ContactItem from '../ContactItem';

import './styles.scss';

class Contact extends React.Component {
    componentDidMount() {
        initGA();
        ReactGA.pageview('/contact');
    }

    render() {
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
    }
}

export default Contact;
