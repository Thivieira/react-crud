import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInUser } from '../actions/authActions';

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

export default props => (
  <Formik
    initialValues={{ identifier: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      const { identifier, password } = values;
      props.dispatch(signInUser({ identifier, password }));
      props.history.push('/admin');
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
          <ErrorMessage name="identifier" component="small" className="form-text text-muted" />
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
