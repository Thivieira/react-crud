import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BaseLayout>
        <Container>
          <Jumbotron>
            <h1 className="display-3">Admin, você está logado.</h1>
          </Jumbotron>
        </Container>
      </BaseLayout>
    );
  }
}
