import React from 'react';
import { GetServerSidePropsContext } from 'next';

import ClassRoom from './Classroom';
import Layout from '../../components/Layout/Layout';
import classroomList from '../../data/classroom-list.json';
import { IClassRoom } from "../../interfaces";

interface Props {
  data: IClassRoom;
}

const ClassRoomPage = ({ data }: Props) => {
  return (
    <Layout>
      <ClassRoom { ...data } />
    </Layout>
  )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, params } = context;
  const data = classroomList.find(classroom => classroom.id === query?.id && classroom.courseId === query?.course);

  const defaultData: IClassRoom = {
    id: '',
    courseId: '',
    title: '',
    description: '',
    date: '',
    links: []
  };

  return {
    props: {
      data: data || defaultData,
      params,
      query,
    }
  }
}

export default ClassRoomPage;
