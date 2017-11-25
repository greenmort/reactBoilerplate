import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Module from './module1';

class App extends Component {

    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path = '/' component = {Module}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

render (<App/>, document.getElementById('root'));