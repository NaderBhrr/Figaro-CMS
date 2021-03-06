import React, { FC, ReactElement, memo, useContext } from "react";
import Head from "next/head";

// Components
import Login from "./Login";

// Styles
import "./Layout.module.scss";

const Layout: FC = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="title" content="Login" />
      </Head>

      <Login />
    </>
  );
};

export default memo(Layout);
