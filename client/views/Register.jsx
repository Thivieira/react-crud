import React from 'react';
import { Container } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
import RegisterFormContainer from '../containers/RegisterFormContainer';

const style = {
  container: {
    paddingTop: 25
  },
  h1: {
    marginBottom: 25
  }
};

export default () => (
  <BaseLayout>
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={style.container}
    >
      <h1 style={style.h1}>Registrar</h1>
      <RegisterFormContainer />
    </Container>
  </BaseLayout>
);
