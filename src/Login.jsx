import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import BaseLayout from './layouts/BaseLayout';
import FormErrors from './components/FormErrors';

const style = {
  container: {
    paddingTop: 25
  },
  h1: {
    marginBottom: 25
  },
  form: {
    maxWidth: 600,
    width: '100%'
  }
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleUserInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let { emailValid, passwordValid } = this.state;
    const { formErrors } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : ' é inválido.';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        formErrors.password = passwordValid ? '' : ' muito curta.';
        break;
      default:
        break;
    }
    this.setState({ formErrors, emailValid, passwordValid }, this.validateForm);
  }

  validateForm() {
    this.setState(prevState => prevState.emailValid && prevState.passwordValid);
  }

  // eslint-disable-next-line class-methods-use-this
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { email, password, formErrors, formValid } = this.state;
    return (
      <BaseLayout>
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={style.container}
        >
          <h1 style={style.h1}>Login</h1>
          <div className="panel panel-default">
            <FormErrors formErrors={formErrors} />
          </div>
          <Form style={style.form}>
            <FormGroup className={this.errorClass(formErrors.email)}>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={email}
                onChange={event => this.handleUserInput(event)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Senha</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Senha"
                value={password}
                onChange={event => this.handleUserInput(event)}
              />
            </FormGroup>
            <Button onClick={this.onSubmit} disabled={formValid}>
              Enviar
            </Button>
          </Form>
        </Container>
      </BaseLayout>
    );
  }
}
