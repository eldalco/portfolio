import styles from "./styles.module.css"
import GridEducation from "./GridEducation"


const SectionEducation = () => {
  return (
    <section className={styles["c-section"]}>
      <div className={styles["section__content"]}>
        <div className={styles["div__title"]}>
          <h2>Educación</h2>
        </div>
        <GridEducation />
      </div>
    </section>
  )
}

export default SectionEducation