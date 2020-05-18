import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";

import Layout from '../components/Layout';
import Course from './index/Course';
import courseList from '../data/course-list.json';
import { ICourse } from '../interfaces';

const CoursePage = ({ item }: { item: ICourse}) => (
  <Layout title={`Course: ${item.title}`}>
    <Course { ...item } />
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = courseList.map(({ link }) => ({
    params: { id: link },
  }));

  return { paths, fallback: false }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = courseList.find(data => data.link === id);
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } }
  }
};

export default CoursePage;
