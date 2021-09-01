// Dependencies
import React, { FC, ReactElement, memo } from "react";
import Head from "next/head";

// Interface
interface iProps {
  children: ReactElement;
  title?: string;
}

const MainLayout: FC<iProps> = ({ children, title }): ReactElement => (
  <>
    <Head>
      <title>Dashboard {title ? `- ${title}` : ""}</title>
      <meta name="title" content={`Dashboard ${title ? `- ${title}` : ""}`} />
    </Head>

    <div>{children}</div>
  </>
);

export default memo(MainLayout);
