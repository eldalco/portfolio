import practicePortfolio from "../../../content/practicePortfolio";
import CardPortfolio from "../CardPortfolio";
import styles from "./styles.module.css";


const ArchivePortfolio = () => {
  return (
    <div className={styles["container__archive"]}>
      {
        practicePortfolio.map((item)=> (
          <CardPortfolio data={item}/>
        ))
      }
    </div>
  )
}

export default ArchivePortfolio