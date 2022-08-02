import React from "react";
import styles from "./styles.module.css";

const Picture = () => {
  return (
    <div className={styles["container__img"]}>
      <img
        className={styles["img__picture"]}
        src="./images/picture.webp"
        alt="Elkin Alfonso picture"
      />
    </div>
  );
};

export default Picture;
