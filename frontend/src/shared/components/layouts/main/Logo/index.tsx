import React, { ReactElement, memo } from "react";

// Components
import Link from "next/link";

// Styles
import styles from "./Logo.module.scss";

const Logo = (): ReactElement => {
  return (
    <div className={styles.logo}>
      <Link href="dashboard">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default memo(Logo);
