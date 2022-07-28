import React from 'react'
import styles from "./styles.module.css"


const ContentHero = () => {
    return (
        <div className={styles["container__content"]}>
            <div className={styles["div__title"]}>
                <h1>Elkin Alfonso</h1>
            </div>
            <div className={styles["div__paragraph"]}>
                <p>Soy Ingeniero de sistemas con más de 2 años de experiencia en labores de desarrollo de software. Particularmente me desempeño con tecnologías de JavaScript de Back end y Front end: React js, Next js, Node js, Express js.</p>
            </div>
            <div className={styles["div__line-btn"]}>
                <div className={`${styles["div__btn-contact"]} ${styles["div__btn"]}`}>
                    <a href="#">Contáctame</a>
                </div>
                <div className={`${styles["div__btn-cv"]} ${styles["div__btn"]}`}>
                    <a href="#">Descargar CV</a>
                </div>
            </div>
        </div>
    )
}

export default ContentHero