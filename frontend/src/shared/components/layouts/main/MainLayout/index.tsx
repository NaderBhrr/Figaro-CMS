// Dependencies
import React, { FC, ReactElement, memo } from "react";
import Head from "next/head";

// Shared Components
import Content from "../Content";
import Sidebar from "../Sidebar";

// Interface
interface iProps {
  children: ReactElement;
  header?: boolean;
  sidebar?: boolean;
  content?: boolean;
  footer?: boolean;
  title?: string;
  noWrapper?: boolean;
  noFlex?: boolean;
  router?: any;
}

const MainLayout: FC<iProps> = ({
  children,
  header,
  sidebar,
  content,
  footer,
  title,
  noWrapper,
  noFlex,
  router,
}): ReactElement => (
  <>
    <Head>
      <title>Dashboard {title ? `- ${title}` : ""}</title>
      <meta name="title" content={`Dashboard ${title ? `- ${title}` : ""}`} />
    </Head>

    <div>
      {sidebar && <Sidebar router={router} />}
      {content && (
        <Content
          header={header}
          footer={footer}
          noWrapper={noWrapper}
          router={router}
        >
          {children}
        </Content>
      )}
      {!content && children}
    </div>
  </>
);

export default memo(MainLayout);
