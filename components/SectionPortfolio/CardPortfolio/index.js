import styles from "./styles.module.css"
import { useEffect, useRef, useState } from "react";

const CardPortfolio = ({data}) => {
  const [value, setValue] = useState(false)
  const ref = useRef("");

  const {id, title, description, tech, image} = data
  const hover = ()=> {
    setValue(true)
  }
  const noHover = ()=> {
    setValue(false)
  }
  return (
    <div key={id} className={styles["container__card"]} ref={ref} onMouseEnter={hover} onMouseLeave={noHover}>
      <div className={styles["card__image"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["card__content"]}>
        <h3>{title}</h3>
        <p>{tech}</p>
      </div>
      <div className={styles["info__card"]} style={value ? {top: "0%"}: {top:"100%"}}>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPortfolio