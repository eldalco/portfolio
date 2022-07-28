import practicePortfolio from "../../../content/practicePortfolio";
import CardPortfolio from "../CardPortfolio";
import styles from "./styles.module.css";


const ArchivePortfolio = () => {
  return (
    <ul className={styles["container__archive"]}>
      {
        practicePortfolio.map((item, index)=> (
          <li key={item.id}>          
            <CardPortfolio data={item}  />
          </li>
        ))
      }
    </ul>
  )
}

export default ArchivePortfolio