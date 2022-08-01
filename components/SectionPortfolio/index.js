import styles from "./styles.module.css"
import ArchivePortfolio from "./ArchivePortfolio"

const SectionPortfolio = () => {
  return (
    <section className={styles["c-section"]}>
      <div className={styles["section__content"]}>
        <div className={styles["div__title"]}>
          <h2>Portafolio</h2>
        </div>
        <ArchivePortfolio />
      </div>
    </section>
  )
}

export default SectionPortfolio