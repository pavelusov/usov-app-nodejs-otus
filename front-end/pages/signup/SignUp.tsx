import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field } from 'react-final-form'

import s from './SignUp.module.scss';

interface Props {
  onSubmit(e: {[key: string]: string}): Promise<{[key: string]: string}>;
}

const SignUp = ({ onSubmit }: Props) => {

  return (
    <Container>
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
            <Button variant="success" type="submit">Sign up</Button>
            </form>
            );
          }}
        </FinalForm>
      </div>
    </Container>
  )
};

export default SignUp;
