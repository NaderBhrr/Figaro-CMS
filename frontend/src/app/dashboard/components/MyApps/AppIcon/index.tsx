/* eslint-disable react/require-default-props */
// Dependencies
import React, { FC, ReactElement, memo } from "react";

// Styles
import styles from "./AppIcon.scss";

// Interfaces
interface iProps {
  app: any;
  hideName?: boolean;
}

const AppIcon = ({ app, hideName }: iProps): ReactElement => {
  return (
    <>
      <div
        className="icon"
        style={{ backgroundColor: app.icon }}
        title={app.appName}
      >
        {app.appName.substring(0, 2)}
      </div>

      {!hideName && <span className="iconName">{app.appName}</span>}
    </>
  );
};

export default memo(AppIcon);
