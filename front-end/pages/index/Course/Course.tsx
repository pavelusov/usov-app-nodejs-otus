import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

import { ICourse } from '../../../interfaces';
import s from './Course.module.scss';

const Course = ({ title, description, image, classrooms }: ICourse) => (
  <Container>
    <h1 className={s.title}>{title}</h1>
    <div className={s.content}>
      <div className={s.image}><img src={image} alt={title} /></div>
      <div className={s.description}>{description}</div>
    </div>
    <ListGroup>
      {classrooms.map(({ id, title, description, date }) => (
        <ListGroupItem key={id}>
          <div className={s.classRoomTitle}>{title}</div>
          <div className={s.classRoomDescription}>{description}</div>
          <div className={s.classRoomDate}>{date}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Container>
);

export default Course
