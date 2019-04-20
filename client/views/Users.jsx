import React from 'react';
import { Container } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
import AuthHOCContainer from '../containers/AuthHOCContainer';
import UsersListContainer from '../containers/UsersListContainer';

const style = {
  container: {
    paddingTop: 25
  },
  h1: {
    marginBottom: 25
  }
};

const Users = () => (
  <BaseLayout>
    <Container className="d-flex flex-column justify-content-center" style={style.container}>
      <h1 style={style.h1}>Lista de Usuários</h1>
      <UsersListContainer />
    </Container>
  </BaseLayout>
);

export default AuthHOCContainer(Users);
