import React from 'react';
import Router from 'next/router';
import fetcher from '../../services/fetcher';
import AuthForm from '../../components/AuthForm/AuthForm';
import Layout from '../../components/Layout/Layout';
import { ResponseError } from "../../interfaces";
import { GetServerSidePropsContext } from "next";
import AuthService from "../../services/AuthService";



const SignUpPage = () => {
  const onSubmit = async (payload: {[key: string]: string}) => {
    const res = await fetcher('api/user/signup', { body: payload });

    if (res?.errors) {
      const errors: {[key: string]: string} = {};
      res.errors.forEach(({param, msg }: ResponseError) => {
        errors[param] = msg;
      });
      return errors;
    }

    await Router.push('/');
  };

  return (
    <Layout>
      <AuthForm buttonTitle="Sign up" title="User registration" onSubmit={onSubmit} />
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

export default SignUpPage;
