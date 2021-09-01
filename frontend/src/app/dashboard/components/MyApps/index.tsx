// Dependencies
import React, { FC, ReactElement, memo } from "react";

// Contexts
import { I18nContext } from "@contexts/i18n";

// Shared components
import MainLayout from "@layouts/main/MainLayout";
import Logo from "@layouts/main/Logo";
import Cards from "./Cards";

interface iProps {
  dataGetApps: any;
}

const MyApps: FC<iProps> = ({ dataGetApps }): ReactElement => {
  // First render
  if (!dataGetApps.getApps) {
    return <div />;
  }

  return (
    <MainLayout title={t("My Apps")}>
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
      </div>

      <Cards items={dataGetApps.getApps} />
    </MainLayout>
  );
};

export default memo(MyApps);
