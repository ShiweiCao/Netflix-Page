import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Index from './components/Index'
import Mylist from './components/Mylist'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <div>
                        <Route path="/" exact={true} component={Index} />
                        <Route path="/mylist" component={Mylist} />
                    </div>
            </BrowserRouter> 
        )
    }
}