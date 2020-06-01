import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import AddingCourseForm from '../../../components/AddingCourseForm/AddingCourseForm';
import fetcher from "../../../services/fetcher";
import { ResponseError } from "../../../interfaces";
import AppContext from "../../../contexts/AppContext";

const fetchCourses = async (apiHost: string) => {
  const res = await fetcher(apiHost + '/course', { method: 'GET' });
  console.log('res', res);
};

const User = () => {
  const [isShowFormCourse, toggleFormCourse] = useState(false);
  const onToggleFormCourse = () => {
    toggleFormCourse(!isShowFormCourse);
  };

  useEffect(() => {
    console.log('use effect')
  });

  return (
    <AppContext.Consumer>
      {({ access, apiHost }) => {
        if (!access) return null;

        const courses = (apiHost: string) => fetchCourses(apiHost);
        courses(apiHost).then(res => {
          console.log('resresres', res)
        });
        const onSubmit = async (payload: {[key: string]: string}) => {
          const res = await fetcher(apiHost + '/course', { body: payload });

          if (res?.errors) {
            const errors: {[key: string]: string} = {};
            res.errors.forEach(({param, msg }: ResponseError) => {
              errors[param] = msg;
            });

            return errors;
          }
          onToggleFormCourse();
        };

        return (
          <Container>
            <div>
              <Button
                variant={isShowFormCourse ? "light" : "success"}
                onClick={onToggleFormCourse}>Add course</Button>
            </div>
            {isShowFormCourse && (
              <AddingCourseForm title="Adding a course" buttonTitle="Add" onSubmit={onSubmit}/>
            )}
            <div>

            </div>
          </Container>
        )
      }}
    </AppContext.Consumer>
  );
};

export default User;
