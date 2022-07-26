import styles from "./styles.module.css"
import GridSkills from './GridSkills'

const SectionSkills = () => {
  return (
    <section className={styles["c-section"]}>
      <div className={styles["div__title"]}>
        <h2>Skills</h2>
      </div>
      <GridSkills />
    </section>
  )
}

export default SectionSkills