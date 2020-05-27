import React, { useEffect } from 'react';
import { NextRouter, withRouter } from "next/router";
import { Container } from "react-bootstrap";

import Layout from '../../components/Layout/Layout'
import Store from "../../interfaces/store";
import AppContext from "../../contexts/AppContext";
import { GetServerSidePropsContext } from "next";
import AuthService from "../../services/AuthService";

interface Props extends Store {
  router: NextRouter;
}

const User = ({ access, router }: Props) => {

  useEffect(() => {
    if (!access) router.push('/signin');
  });

  return (
    <Layout access={access}>
      <AppContext.Consumer>
        {({ access }) => {
          if (!access) return null;
          return (
            <Container>
              <div>User Account</div>
            </Container>
          );
        }}
      </AppContext.Consumer>
    </Layout>
  )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      access: await AuthService.hasSuccess(context?.req),
    }
  }
}

export default withRouter(User);
