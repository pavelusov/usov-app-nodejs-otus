import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import s from './Header.module.scss';
import AppContext from '../../contexts/AppContext';
import AuthLinks from './AuthLinks';
import NonAuthLinks from './NonAuthLinks';
import linksData from '../../data/links-data.json';

const Header = () => (
  <header className={s.root}>
    <Container>
      <nav>
        <AppContext.Consumer>
          {({ access }) => {
            return (
              <div className={s.navWrapper}>
                <div>
                  {linksData.map(({ link, title }) => (
                    <Link key={link} href={link}>
                      <a className={s.link}>{title}</a>
                    </Link>
                  ))}
                </div>
                <div>
                  { access ? <AuthLinks /> : <NonAuthLinks />}
                </div>
              </div>
            )
          }}
        </AppContext.Consumer>
      </nav>
    </Container>
  </header>
);

export default Header;
