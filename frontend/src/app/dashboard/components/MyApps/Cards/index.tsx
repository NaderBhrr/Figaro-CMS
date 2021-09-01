// Dependencies
import React, { FC, ReactElement, memo } from "react";
import { Icon } from "@contentpi/ui";

// Components
import AppIcon from "../AppIcon";

// Styles
import styles from "./Cards.scss";

// Interfaces
interface iProps {
  items: any[];
}

const Cards = ({ items }: iProps): ReactElement => {
  return (
    <section>
      <h1>My Apps</h1>

      <ul>
        {items.map((app) => {
          return (
            <li key={app.id}>
              <section className="card" title={app.description}>
                <AppIcon app={app} />
              </section>
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
