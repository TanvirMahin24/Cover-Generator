import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return <div className={styles.header}>{props.children}</div>;
};

export default Header;
