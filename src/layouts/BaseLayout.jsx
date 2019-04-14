import React, { Component } from 'react';
import Header from '../partials/Header.jsx';
import Sidebar from '../partials/Sidebar.jsx';
import Footer from '../partials/Footer.jsx';

export default class BaseLayout extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header/>
                <Sidebar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}