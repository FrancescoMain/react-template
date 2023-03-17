import styles from "./Jumbo.module.css";
import Button from "../Button";

const jumbo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Our Business Goal</h2>
      <h1 className={styles.h1}>TO Grow & manage Your Business</h1>
      <div className={styles.btn}>
        <Button size="M"> Get Started</Button>
      </div>
    </div>
  );
};

export default jumbo;
