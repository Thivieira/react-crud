import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import BaseLayout from '../layouts/BaseLayout';
import AuthHOCContainer from '../containers/AuthHOCContainer';
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BaseLayout>
        <Container>
          <Jumbotron>
            <h1 className="display-3">{this.props.user.username}, você está logado.</h1>
          </Jumbotron>
        </Container>
      </BaseLayout>
    );
  }
}

export default AuthHOCContainer(Admin);
