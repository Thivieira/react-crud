import React from 'react';
import { Container, Button, FormGroup, Label } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
import LoginFormContainer from '../containers/LoginFormContainer';
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
      <h1 style={style.h1}>Login</h1>
      <LoginFormContainer />
    </Container>
  </BaseLayout>
);
