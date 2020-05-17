import React from 'react';
import Link from 'next/link';

import { ICourse } from '../../interfaces';
import s from './Course.module.scss';

interface Props extends ICourse {}

const Course = ({ description, title, image, link }: Props) => (
  <div className={s.root}>
    <div className={s.image}>
      <img src={image} alt={title}/>
    </div>
    <div className={s.content}>
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
      <Link href={link}><a>Go to course!</a></Link>
    </div>
  </div>
);

export default Course;
