import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ListContact from "../SectionContact/ListContact";

const Nav = () => {
  const [colorNav, setColorNav] = useState(true);
  const controlNav = () => {
    if (window.scrollY > 100) {
      setColorNav(false);
    } else {
      setColorNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.addEventListener("scroll", controlNav);
    };
  }, []);
  return (
    <nav
      className={
        colorNav
          ? `${styles["nav"]} ${styles["nav__fixed"]}`
          : `${styles["nav"]} ${styles["nav__active"]}`
      }
    >
      <div className={styles["row__nav"]}>
        <div className={styles["div__img"]}>
          <img src="./images/EA-logo1.webp" alt="" />
        </div>
        <div className={styles["row__nav-content"]}>
          <ListContact />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
