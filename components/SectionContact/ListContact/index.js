import React from 'react'
import Link from 'next/link'
import styles from "./styles.module.css"
import { BsLinkedin, BsEnvelope, BsGithub } from "react-icons/bs";

const ListContact = () => {
  return (
    <div className={styles["container__icons"]}>
      <div className={styles["div__icon"]}>
        <Link href="https://www.linkedin.com/in/elkin-alfonso/">
          <a  target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={30}/>
          </a>
        </Link>
      </div>
      <div className={styles["div__icon"]}>
        <Link href="mailto:elkincortes03@gmail.com">
          <a  target="_blank" rel="noopener noreferrer">
            <BsEnvelope size={30}/>
          </a>
        </Link>
      </div>
      <div className={styles["div__icon"]}>
        <Link href="https://github.com/eldalco">
          <a target="_blank" rel="noopener noreferrer">
            <BsGithub size={30}/>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ListContact