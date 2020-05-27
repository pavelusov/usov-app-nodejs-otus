import React from 'react';
import { GetServerSidePropsContext } from 'next';

import Courses from './Courses';
import courseList from '../../data/course-list.json';
import Layout from '../../components/Layout';
import AuthService from '../../services/AuthService';
import Store from '../../interfaces/store';


const IndexPage = ({ access }: Store) => (
  <Layout access={access} title="Courses">
    <Courses data={courseList} />
  </Layout>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      access: await AuthService.hasSuccess(context?.req),
    }
  }
}
export default IndexPage
