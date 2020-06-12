import React, { Fragment } from 'react';
import Link from 'next/link';
import s from './Header.module.scss';

const NonAuthLinks = () => (
  <Fragment>
    <Link href="/signin"><a className={s.link}>Sign in</a></Link>
    <Link href="/signup"><a className={s.link}>Sign up</a></Link>
  </Fragment>
);

export default NonAuthLinks;
