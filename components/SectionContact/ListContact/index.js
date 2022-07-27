import React from 'react'
import Link from 'next/link'
import styles from "./styles.module.css"
import { BsLinkedin, BsEnvelope, BsGithub } from "react-icons/bs";

const ListContact = () => {
  return (
    <div className={styles["container__icons"]}>
      <div className={styles["div__icon"]}>
        <Link href="#">
          <BsLinkedin size={30}/>
        </Link>
      </div>
      <div className={styles["div__icon"]}>
        <Link href="#">
          <BsEnvelope size={30}/>
        </Link>
      </div>
      <div className={styles["div__icon"]}>
        <Link href="#">
          <BsGithub size={30}/>
        </Link>
      </div>
    </div>
  )
}

export default ListContact