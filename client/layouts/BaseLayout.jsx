import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../partials/Footer';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Footer />
  </div>
);
