import React from 'react';
import { Container } from 'react-bootstrap';

import Course from '../../../components/Course';
import { ICourse } from '../../../interfaces';
import s from './Courses.module.scss';

interface Props {
  data: ICourse[];
}

const Courses = ({ data }: Props) => (
  <Container>
    <h1 className={s.title}>Our course list</h1>
    <div>
      {data.map(({ id, title, description, image, link }) => (
        <Course
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          link={link}
        />
      ))}
    </div>
  </Container>
);

export default Courses
