// Dependencies
import React, { FC, ReactElement, useContext, memo } from "react";
import { Icon, Steps, PrimaryButton } from "@contentpi/ui";

// Shared components
import Link from "@ui/Link";
import MainLayout from "@layouts/main/MainLayout";

// Contexts
import { I18nContext } from "@contexts/i18n";

// Constants
import { SLACK_LINK } from "@constants/links";

// Styles
import { StyledHome } from "./Home.styled";

// Interfaces
interface iProps {
  router: any;
}

const Home: FC<iProps> = ({ router }): ReactElement => {
  return (
    <MainLayout title="Home" header content footer sidebar router={router}>
      <h1>Home</h1>
    </MainLayout>
  );
};

export default memo(Home);
