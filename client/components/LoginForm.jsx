import React from 'react';
import { Container, Button, FormGroup, Label } from 'reactstrap';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  signInUser,
  signInUserSuccess,
  signInUserFailure,
  resetUserFields
} from '../Users/actions';

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
  identifier: Yup.string().required('Campo Obrigatório.')
});

export default () => (
  <Formik
    initialValues={{ identifier: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      axios
        .post('http://localhost:9000/api/users/signin', {
          identifier: values.identifier,
          password: values.password
        })
        .then(res => {
          console.log(res);
          setSubmitting(false);
        });
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={LoginSchema}
    render={({ isSubmitting }) => (
      <Form style={style.form}>
        <FormGroup>
          <Label htmlFor="identifier">Usuário ou Email</Label>
          <Field
            className="form-control"
            name="identifier"
            type="text"
            placeholder="Usuário ou Email"
            autoComplete="username"
          />
          <ErrorMessage name="email" component="small" className="form-text text-muted" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Field
            className="form-control"
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="small" className="form-text text-muted" />
        </FormGroup>
        <Button type="submit" disabled={isSubmitting}>
          Enviar
        </Button>
      </Form>
    )}
  />
);
