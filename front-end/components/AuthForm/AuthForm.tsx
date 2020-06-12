import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field } from 'react-final-form'

import s from './AuthForm.module.scss';

interface Props {
  onSubmit(e: {[key: string]: string}): Promise<{[key: string]: string} | undefined>;
  buttonTitle: string;
  title: string;
}

const AuthForm = ({ onSubmit, buttonTitle, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    <div className={s.root}>

      <FinalForm onSubmit={onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="login">
                {({ input, meta }) => {
                  return (
                    <Form.Group controlId="formLogin">
                      <Form.Label>Login</Form.Label>
                      <Form.Control {...input} type="text" placeholder="Enter login" />
                      {meta.submitError && <Form.Text className="text-muted">{meta.submitError}</Form.Text>}
                    </Form.Group>
                  )
                }}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...input} type="text" placeholder="Enter password" />
                    {meta.submitError && <Form.Text className="text-muted">{meta.submitError}</Form.Text>}
                  </Form.Group>
                )}
              </Field>
              <Button variant="success" type="submit">{buttonTitle}</Button>
            </form>
          );
        }}
      </FinalForm>
    </div>
  </Container>
);

export default AuthForm;
