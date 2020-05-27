import React, { Fragment } from "react";
import Router from "next/router";
import Link from "next/link";

import s from "./Header.module.scss";
import fetcher from "../../services/fetcher";

const onClick = async () => {
  const res = await fetcher('api/user/logout', { method: 'POST' });
  if (res?.data?.success) await Router.push('/');
};

const AuthLinks = () => (
  <Fragment>
    <Link href="/user"><a className={s.link}>User info</a></Link>
    <div className={s.link} onClick={onClick}>Logout</div>
  </Fragment>
);

export default AuthLinks;
