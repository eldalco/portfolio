import styles from "./styles.module.css";
import data from "../../../content/education";
import CardEducation from "../CardEducation";

const GriEducation = () => {
  return (
    <div className={styles["row__education"]}>
      {data.map((item) => (
        <div key={item.id} className={styles["column__education"]}>
          <CardEducation
            status={item.status}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default GriEducation;
