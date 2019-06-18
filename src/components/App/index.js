import React from 'react';
import './styles.scss';
import Menu from '../Menu';

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
            </div>
        );
    }
}

export default App;
