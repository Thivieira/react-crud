import React from 'react';
import { Button, FormGroup, Label, FormText } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { signUpUser, signUpUserSuccess, signUpUserFailure } from '../actions/authActions';

function mask(userInput) {
  let numbers = userInput.match(/\d/g);
  let numberLength = 0;
  if (numbers) {
    numberLength = numbers.join('').length;
  }

  if (numberLength > 10) {
    return [
      '(',
      /[1-9]/,
      /[1-9]/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ];
  } else {
    return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }
}

const style = {
  form: {
    maxWidth: 600,
    width: '100%'
  }
};

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Senha muito curta!')
    .required('Campo Obrigatório.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais.')
    .required('Campo Obrigatório'),
  nome: Yup.string().required('Campo Obrigatório.'),
  telefone: Yup.string(),
  username: Yup.string().required('Campo Obrigatório.'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo Obrigatório.')
});

export default props => (
  <Formik
    enableReinitialize
    initialValues={{
      nome: '',
      telefone: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }}
    validationSchema={SignUpSchema}
    onSubmit={(values, actions) => {
      const { nome, telefone, email, username, password, confirmPassword } = values;
      props
        .dispatch(signUpUser({ nome, telefone, email, username, password, confirmPassword }))
        .then(({ data }) => {
          actions.setSubmitting(false);
          localStorage.setItem('token', data.token);
          props.dispatch(signUpUserSuccess(data));
          props.history.push('/admin');
        })
        .catch(err => {
          actions.setSubmitting(false);
          props.dispatch(signUpUserFailure(err));
        });
    }}
    render={props => (
      <Form style={style.form}>
        <FormText color="muted" className="mb-3 mt-3">
          Campos com <span style={{ color: 'red' }}>*</span> são campos obrigatórios.
        </FormText>
        <FormGroup>
          <Label htmlFor="nome">
            Nome: <span style={{ color: 'red' }}>*</span>
          </Label>
          <Field
            className="form-control"
            name="nome"
            type="text"
            placeholder="Digite seu nome completo"
            autoComplete="name"
          />
          <ErrorMessage name="nome" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="telefone">Telefone:</Label>
          <MaskedInput
            mask={mask}
            className="form-control"
            placeholder="Digite seu telefone preferido"
            id="my-input-id"
            name="telefone"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.telefone}
          />
          <ErrorMessage name="telefone" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            Email: <span style={{ color: 'red' }}>*</span>
          </Label>
          <Field
            className="form-control"
            name="email"
            type="email"
            placeholder="Digite seu email preferido"
            autoComplete="email"
          />
          <ErrorMessage name="email" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">
            Usuário: <span style={{ color: 'red' }}>*</span>
          </Label>
          <Field
            className="form-control"
            name="username"
            type="text"
            placeholder="Digite seu usuário preferido"
            autoComplete="username"
          />
          <ErrorMessage name="username" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            Senha: <span style={{ color: 'red' }}>*</span>
          </Label>
          <Field
            className="form-control"
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            Confirmar Senha: <span style={{ color: 'red' }}>*</span>
          </Label>
          <Field
            className="form-control"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            autoComplete="current-password"
          />
          <ErrorMessage name="confirmPassword" component="small" className="form-text text-muted" />
        </FormGroup>
        <Button type="submit" disabled={props.isSubmitting}>
          Enviar
        </Button>
      </Form>
    )}
  />
);
