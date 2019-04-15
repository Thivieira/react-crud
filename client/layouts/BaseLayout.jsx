import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
