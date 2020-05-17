import * as React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import linksData from '../../data/links-data.json';
import s from './Header.module.scss';

const Header = () => (
  <header className={s.root}>
    <Container>
      <nav>
        {linksData.map(({ link, title }) => (
          <Link key={link} href={link}>
            <a className={s.link}>{title}</a>
          </Link>
          ))}
      </nav>
    </Container>
  </header>
);

export default Header;
