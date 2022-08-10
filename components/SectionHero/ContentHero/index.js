import React from "react";
import styles from "./styles.module.css";
import Link from "next/dist/client/link";

const ContentHero = () => {
  return (
    <div className={styles["container__content"]}>
      <div className={styles["div__title"]}>
        <h1>Elkin Alfonso</h1>
      </div>
      <div className={styles["div__paragraph"]}>
        <p>
          Soy Ingeniero de sistemas con más de 2 años de experiencia en labores
          de desarrollo de software. Me desempeño en back-end, front-end y el
          diseño de bases de datos.
        </p>
      </div>
      <div className={styles["div__line-btn"]}>
        <div className={`${styles["div__btn-contact"]} ${styles["div__btn"]}`}>
          <Link href="mailto:elkincortes03@gmail.com">
            <a target="_blank" rel="noopener noreferrer">
              Contáctame
            </a>
          </Link>
        </div>
        <div className={`${styles["div__btn-cv"]} ${styles["div__btn"]}`}>          
          <a href="/files/Elkin_Alfonso_CV-es.pdf" download="/files/CV_Elkin_Alfonso_Cortes.pdf">Descargar CV</a>          
        </div>
      </div>
    </div>
  );
};

export default ContentHero;
