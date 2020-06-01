import React, { useEffect } from 'react';
import { NextRouter, withRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import User from './User';
import Layout from '../../components/Layout/Layout';
import Store from '../../interfaces/store';
import AuthService from '../../services/AuthService';

interface Props extends Store {
  router: NextRouter;
}

const UserPage = ({ access, apiHost = '', router }: Props) => {

  useEffect(() => {
    if (!access) router.push('/signin');
  });

  return (
    <Layout access={access} apiHost={apiHost}>
      <User />
    </Layout>
  )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      access: await AuthService.hasSuccess(context?.req),
      apiHost: process.env.API_HOST
    }
  }
}

export default withRouter(UserPage);
