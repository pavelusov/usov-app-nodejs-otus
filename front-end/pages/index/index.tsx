import React from 'react';

import Layout from '../../components/Layout';
import Courses from './Courses';
import courseList from '../../data/course-list.json';

const IndexPage = () => (
  <Layout title="Courses">
    <Courses data={courseList} />
  </Layout>
);

export default IndexPage
