// Dependencies
import React, { FC, ReactElement, memo } from "react";
import { Icon } from "@contentpi/ui";

// Constants
import { STAGE_LINK } from "@constants/links";

// Components
import Link from "@ui/Link";
import AppIcon from "../AppIcon";

// Styles
import styles from "./Cards.scss";

// Interfaces
interface iProps {
  items: any[];
  router: any;
}

const Cards = ({ items, router }: iProps): ReactElement => {
  return (
    <section>
      <h1>My Apps</h1>

      <ul>
        {items.map((app) => {
          router.appId = app.id;

          return (
            <li key={app.id}>
              <Link href={STAGE_LINK(router).href} as={STAGE_LINK(router).as}>
                <section className="card" title={app.description}>
                  <AppIcon app={app} />
                </section>
              </Link>
            </li>
          );
        })}

        <li>
          <section className="card">
            <section className="app">
              <Icon type="fas fa-plus" />
            </section>

            <span className="createNewApp">Create New App</span>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default memo(Cards);
