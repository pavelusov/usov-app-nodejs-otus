import React, { useEffect } from 'react';
import { NextRouter, withRouter } from "next/router";

import Layout from '../../components/Layout/Layout'
import Store from "../../interfaces/store";
import s from "../../components/Header/Header.module.scss";
import AppContext from "../../contexts/AppContext";

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
          return <div className={s.link}>User</div>
        }}
      </AppContext.Consumer>
    </Layout>
  )
};

export default withRouter(User);

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const paths = sampleUserData.map(user => ({
//     params: { id: user.id.toString() },
//   }))
//
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id
//     const item = sampleUserData.find(data => data.id === Number(id))
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } }
//   } catch (err) {
//     return { props: { errors: err.message } }
//   }
// }
