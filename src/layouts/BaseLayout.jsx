import React, { Component } from 'react';
import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
