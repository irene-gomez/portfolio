import React from 'react';
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

    render() {
        const { itemsMenu } = this.props;
        const { openOrClose, showNav } = this.state;
        return (
            <div className="wrapper-nav">
                <div
                    className={`hamburger-menu ${openOrClose}`}
                    onClick={this.handleClickMenu}
                />
                <nav className={`main-nav ${showNav}`}>
                    <ul className="main-nav__list">
                        {itemsMenu.map((item, index) => (
                            <li key={index} className="main-nav__item">{item}</li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

Menu.propTypes = {
    itemsMenu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    openOrClose: PropTypes.string,
    showNav: PropTypes.string,
    handleClickMenu: PropTypes.func,
};

export default Menu;
