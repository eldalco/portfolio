import styles from "./styles.module.css";

const CardEducation = ({ status, title, description, image }) => {
  return (
    <article className={styles["card__education"]}>
      <div className={styles["block__status"]}>
        <span>{status}</span>
      </div>
      <div className={styles["block__content"]}>
        <div className={styles["content__image"]}>
          <img src={image} alt={title} />
        </div>
        <div className={styles["content__text"]}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default CardEducation;
