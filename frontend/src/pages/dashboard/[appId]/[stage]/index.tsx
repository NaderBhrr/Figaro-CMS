// Dependencies
import React, { FC, ReactElement } from "react";
import { useRouter } from "next/router";

// Contexts
import AppProvider from "@contexts/app";
import UserProvider from "@contexts/user";
import FormProvider from "@contexts/form";

// Components
import Home from "@dashboard/components/Home";

interface iProps {
  __: any;
}

const Page: FC<iProps> = ({ __ }): ReactElement => {
  const router = useRouter();
  const { appId, language } = router.query;

  if (!appId) {
    return <div />;
  }

  return (
    <UserProvider>
      <AppProvider id={appId}>
        <FormProvider>
          <Home router={router.query} />
        </FormProvider>
      </AppProvider>
    </UserProvider>
  );
};

export default Page;
