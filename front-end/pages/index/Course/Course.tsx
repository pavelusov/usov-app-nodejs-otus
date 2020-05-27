import React from 'react';
import Link from 'next/link';
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

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
      {Array.isArray(classrooms) && classrooms?.map(({ id, title, description, date, link }) => (
        <ListGroupItem key={id}>
          <div className={s.classRoomTitle}>{title}</div>
          <div className={s.classRoomDescription}>{description}</div>
          <div className={s.classRoomDate}>{date}</div>
          {link && (
            <Link href={link}>
              <Button variant="secondary">Go to the classroom</Button>
            </Link>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
    <div className={s.adminPart}>
      <Button variant="success">Add user</Button>
    </div>
  </Container>
);

export default Course
