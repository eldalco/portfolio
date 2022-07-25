import React from 'react'
import styles from "./styles.module.css"
import Picture from '../Picture'
import ContentHero from './ContentHero'

const SectionHero = () => {
    return (
        <section className={styles["section__hero"]}>
            <div className={styles["div__picture"]}>
                <Picture />
            </div>
            <div className={styles["div__content"]}>
                <ContentHero />
            </div>
        </section>
    )
}

export default SectionHero