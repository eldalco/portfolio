import styles from "./styles.module.css"
import { useRef, useState } from "react";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";

const CardPortfolio = ({data}) => {
  const [value, setValue] = useState(false)
  const ref = useRef("");

  const {title, description, tech, image, access, github, url} = data
  const handlerInfo = ()=> {
    setValue(!value)
  }
  
  return (
    <div className={styles["container__card"]} >
      <div className={styles["card__image"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["card__content"]}>
        <h3>{title}</h3>
        <p>{tech}</p>
        <div className={styles["content__access"]}>
          <div className={styles["content__access--icons"]}>
            {access && <>
              <Link href={url}>
                <a target="_blank" rel="noopener noreferrer">
                  <BiLink size={30} title="Ver página"/>
                </a>
              </Link>
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <a target="_blank" rel="noopener noreferrer">
                  <BsGithub size={30} title="Ver código"/>
                </a>
              </Link>
            </>
            }   
          </div>
          <div className={styles["content__access--btn"]} ref={ref} onClick={handlerInfo} >
            <button>Ver más</button>
          </div>
        </div>
      </div>

      <div className={styles["info__card"]} style={value ? {top: "0%"}: {top:"100%"}}>
        <div className={styles["info__card--description"]}>
          <p>{description}</p>
          <div className={styles["info__card--close"]} onClick={handlerInfo}>
            <FaRegWindowClose size={30}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPortfolio