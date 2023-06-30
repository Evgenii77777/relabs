import { NavLink } from "react-router-dom";

import { LinksData } from "./linkData";

import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <ul className={styles.list}>
      {LinksData.map((el) => {
        return (
          <li className={styles.item} key={el.path}>
            <NavLink
              to={el.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {el.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </header>
);
