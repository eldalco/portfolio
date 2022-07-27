import styles from "./styles.module.css"
import GridSkills from './GridSkills'

const SectionSkills = () => {
  return (
    <section className={styles["c-section"]}>
      <div className={styles["section__content"]}>
        <div className={styles["div__title"]}>
          <h2>Skills</h2>
        </div>
        <GridSkills />
      </div>
    </section>
  )
}

export default SectionSkills