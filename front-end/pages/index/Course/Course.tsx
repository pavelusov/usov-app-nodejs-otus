import React from 'react';
import { Container } from 'react-bootstrap';

import { ICourse } from '../../../interfaces';
import s from './Course.module.scss';

const Course = ({ title, description, image }: ICourse) => (
  <Container>
    <h1 className={s.title}>{title}</h1>
    <div className={s.content}>
      <div className={s.image}><img src={image} alt={title} /></div>
      <div className={s.description}>{description}</div>
    </div>
  </Container>
);

export default Course
