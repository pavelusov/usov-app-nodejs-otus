import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field } from 'react-final-form'

import s from './AddingCourseForm.module.scss';

interface Props {
  onSubmit(e: {[key: string]: string}): Promise<{[key: string]: string} | undefined>;
  buttonTitle: string;
  title: string;
}
const required = (value: string) => (value ? undefined : 'Required');

const AddingCourseForm = ({ onSubmit, buttonTitle, title }: Props) => (
  <Container>
    <div className={s.root}>
      <h2>{title}</h2>
      <FinalForm onSubmit={onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="title" validate={required}>
                {({ input, meta }) => {
                  return (
                    <Form.Group controlId="formTitle">
                      <Form.Label>title</Form.Label>
                      <Form.Control {...input} type="text" placeholder="Enter a title" />
                      {meta.submitError || (meta.error && meta.touched) && <Form.Text className="text-muted">{meta.error || meta.submitError}</Form.Text>}
                    </Form.Group>
                  )
                }}
              </Field>
              <Field name="description" validate={required}>
                {({ input, meta }) => (
                  <Form.Group controlId="formDescription">
                    <Form.Label>description</Form.Label>
                    <Form.Control {...input} type="text" placeholder="Enter a description" />
                    {meta.submitError || (meta.error && meta.touched) && <Form.Text className="text-muted">{meta.error || meta.submitError}</Form.Text>}
                  </Form.Group>
                )}
              </Field>
              <Field name="image" validate={required}>
                {({ input, meta }) => (
                  <Form.Group controlId="formImage">
                    <Form.Label>image</Form.Label>
                    <Form.Control {...input} type="text" placeholder="Enter a image link" />
                    {meta.submitError || (meta.error && meta.touched) && <Form.Text className="text-muted">{meta.error || meta.submitError}</Form.Text>}
                  </Form.Group>
                )}
              </Field>
              <Field name="link" validate={required}>
                {({ input, meta }) => (
                  <Form.Group controlId="formLink">
                    <Form.Label>Inside link</Form.Label>
                    <Form.Control {...input} type="text" placeholder="Enter a inside course link" />
                    {meta.submitError || (meta.error && meta.touched) && <Form.Text className="text-muted">{meta.error || meta.submitError}</Form.Text>}
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

export default AddingCourseForm;
