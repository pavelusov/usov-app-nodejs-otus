import React from 'react';
import Link from 'next/link';

import { ICourse } from '../../interfaces';
import s from './Course.module.scss';
import { Button } from "react-bootstrap";

interface Props extends ICourse {}

const Course = ({ description, title, image, link }: Props) => (
  <div className={s.root}>
    <div className={s.image}>
      <img src={image} alt={title}/>
    </div>
    <div className={s.content}>
      <div className={s.text}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
      <Link href={link}><Button variant="success">Go to the course!</Button></Link>
    </div>
  </div>
);

export default Course;
