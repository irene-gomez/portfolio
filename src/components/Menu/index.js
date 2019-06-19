import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openOrClose: '',
            showNav: '',
        };
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleClickMenu() {
        this.menuOpenClose();
        this.showCompleteNav();
    }
    
    menuOpenClose() {
        const { openOrClose } = this.state;
        openOrClose === ''
            ? this.setState({ openOrClose: 'is-active' })
            : this.setState({ openOrClose: '' });
    }

    showCompleteNav() {
        const { showNav } = this.state;
        showNav === ''
            ? this.setState({ showNav: 'active-nav' })
            : this.setState({ showNav: '' });       
    }

    closeMenu() {
        this.menuOpenClose();
        this.showCompleteNav();        
    }
    
    render() {
        const { openOrClose, showNav } = this.state;
        return (
            <div className="wrapper-nav">
                <div
                    className={`hamburger-menu ${openOrClose}`}
                    onClick={this.handleClickMenu}
                />
                <nav className={`main-nav column-center ${showNav}`}>
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <Link to="/" onClick={this.closeMenu}>Sobre mi</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/projects" onClick={this.closeMenu}>Proyectos</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/contact" onClick={this.closeMenu}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

Menu.propTypes = {
    openOrClose: PropTypes.string,
    showNav: PropTypes.string,
    handleClickMenu: PropTypes.func,
};

export default Menu;
