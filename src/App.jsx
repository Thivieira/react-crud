import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home.jsx';

export default class App extends React.Component {
    render() {
        
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>
            )
  }
};