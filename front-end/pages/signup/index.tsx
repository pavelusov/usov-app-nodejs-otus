import React from 'react';

import fetcher from '../../services/fetcher';
import SignUp from './SignUp';
import Layout from '../../components/Layout/Layout';
import { ResponseError } from "../../interfaces";



const SignUpPage = () => {
  const onSubmit = async (payload: {[key: string]: string}) => {
    const res = await fetcher(process.env.API_HOST + '/users', payload);

    if (res?.errors) {
      const errors: {[key: string]: string} = {};
      res.errors.forEach(({param, msg }: ResponseError) => {
        errors[param] = msg;
      });
      return errors;
    }

    return {};
  };

  return (
    <Layout>
      <SignUp onSubmit={onSubmit} />
    </Layout>
  )
};

export default SignUpPage;
