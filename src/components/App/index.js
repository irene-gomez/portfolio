import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu';
import Home from '../Home';
import Projects from '../Projects';
import Contact from '../Contact';

import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
