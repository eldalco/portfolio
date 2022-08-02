import styles from "./styles.module.css";
import skills from "../../../content/skills";

const GridSkills = () => {
  return (
    <ul className={styles["container__skills"]}>
      {skills.map((skill) => (
        <li key={skill.id} className={styles["item__skill"]}>
          <div className={styles["div__image"]}>
            <img src={skill.logo} />
          </div>
          <div className={styles["div__name"]}>
            <span>{skill.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridSkills;
