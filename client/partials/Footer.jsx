import React from 'react';
import { Container, Row } from 'reactstrap';
import './Footer.scss';

export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <p>
            Desenvolvido por Thivieira,
            {` ${new Date().getFullYear()}`}
          </p>
        </Row>
      </Container>
    </footer>
  );
};
