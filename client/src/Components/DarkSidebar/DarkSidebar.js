import React from "react";
import darkSidebarImg from "../../Assets/DarkSidebar/DarkSidebar.png";
import styles from "./DarkSidebar.module.css";

const DarkSidebar = () => {
  return (
    <div className={styles.darkSidebar}>
      <img src={darkSidebarImg} alt="" className={styles.img} />
    </div>
  );
};

export default DarkSidebar;
