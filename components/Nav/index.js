import React from 'react'
import styles from "./styles.module.css"

const Nav = () => {
    return (
        <nav className={styles["nav"]}>
            <div className={styles["row__nav"]}>
                <div className={styles["div__img"]}>
                    <img src="./images/EA-logo1.webp" alt="" />
                </div>
                <div className={styles["row__nav-content"]}>
                </div>
            </div>
        </nav>
    )
}

export default Nav