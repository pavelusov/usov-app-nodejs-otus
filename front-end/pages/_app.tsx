import React from 'react';
import '../styles/App.scss';

export default function App(props: { Component: React.FunctionComponent, pageProps: any }) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />
}
