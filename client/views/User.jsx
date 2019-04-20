import React from 'react';
import { Container } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
import AuthHOCContainer from '../containers/AuthHOCContainer';
import UserDetailsContainer from '../containers/UserDetailsContainer';

const style = {
  container: {
    paddingTop: 25
  },
  h1: {
    marginBottom: 25
  }
};

const User = () => (
  <BaseLayout>
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={style.container}
    >
      <h1 style={style.h1}>Lista de Usuários</h1>
      <UserDetailsContainer />
    </Container>
  </BaseLayout>
);

export default AuthHOCContainer(User);
