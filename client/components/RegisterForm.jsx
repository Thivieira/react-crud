import React from 'react';
import { Button, FormGroup, Label, FormText } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInUser, signInUserSuccess, signInUserFailure } from '../actions/authActions';
import MaskedInput from 'react-text-mask';

const style = {
  form: {
    maxWidth: 600,
    width: '100%'
  }
};

const LoginSchema = Yup.object().shape({
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
    initialValues={{
      nome: '',
      telefone: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }}
    enableReinitialize
    onSubmit={(values, actions) => {
      const { nome, telefone, email, username, password, confirmPassword } = values;
      props
        .dispatch(signInUser({ identifier, password }))
        .then(({ data }) => {
          actions.setSubmitting(false);
          localStorage.setItem('token', data.token);
          props.dispatch(signInUserSuccess(data));
          props.history.push('/admin');
        })
        .catch(err => {
          actions.setSubmitting(false);
          props.dispatch(signInUserFailure(err));
        });
    }}
    validationSchema={LoginSchema}
    render={({
      values,
      handleBlur,
      handleChange,

      isSubmitting
    }) => (
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
            mask={[
              '(',
              /[1-9]/,
              /\d/,
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
            ]}
            className="form-control"
            placeholder="Digite seu telefone preferido"
            id="my-input-id"
            name="telefone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.telefone}
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
        <Button type="submit" disabled={isSubmitting}>
          Enviar
        </Button>
      </Form>
    )}
  />
);
