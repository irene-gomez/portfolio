import React from 'react';

import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="secondary-menu">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a
                            className="footer__link"
                            href="mailto:irene@irenegf.com?subject=Contacto web"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email
                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                            className="footer__link"
                            href="https://github.com/irene-gomez"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                            className="footer__link"
                            href="https://www.linkedin.com/in/irenegf/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </li>

                    <li className="footer__item">
                        <a
                            className="footer__link"
                            href="https://twitter.com/igf_osiris"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
