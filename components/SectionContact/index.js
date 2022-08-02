import styles from "./styles.module.css";
import ListContact from "./ListContact";
const SectionContact = () => {
  return (
    <footer className={styles["footer__section"]}>
      <ListContact />
    </footer>
  );
};

export default SectionContact;
