import * as React from 'react';
import Head from 'next/head';

import Header from '../Header';
import s from './Layout.module.scss';
import AppContext from '../../contexts/AppContext';

type Props = {
  title?: string;
  access?: boolean;
  apiHost?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  access = false,
  apiHost = '',
}) => (
  <AppContext.Provider value={{ access, apiHost }}>
    <div className={s.root}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={s.content}>
        {children}
      </div>
    </div>
  </AppContext.Provider>
);

export default Layout
