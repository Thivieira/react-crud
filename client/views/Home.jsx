import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';

export default () => (
  <BaseLayout>
    <Container>
      <Jumbotron>
        <h1 className="display-3">Olá, Mundo!</h1>
        <p className="lead">
          Este é um CRUD feito em React utilizando práticas modernas de componentização,
          estruturação de código
        </p>
        <hr className="my-2" />
        <h2>Contém as seguintes características:</h2>
        <ul>
          <li>React v16.8.6</li>
          <li>Redux v4.0.1</li>
          <li>Autenticação através de JWT</li>
        </ul>
      </Jumbotron>
    </Container>
  </BaseLayout>
);
