import styles from "./styles.module.css"
import skills from "../../../content/skills"

const GridSkills = () => {
  
  return (
    <div className={styles["container__skills"]}>
      {
        skills.map((skill)=>
          <div className={styles["item__skill"]}>
            <div className={styles["div__image"]}>
              <img src={skill.logo} />
            </div>
            <div className={styles["div__name"]}>
              <span>{skill.name}</span>
            </div>
          </div>
        )
      }
      
    </div>
  )
}

export default GridSkills