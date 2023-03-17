import styles from "./Button.module.css";

interface Props {
  children: string;
  size?: "S" | "M";
}

const Button = ({ children, size = "S" }: Props) => {
  return (
    <button
      className={`${styles.btn} ${size === "S" ? styles.btnS : styles.btnM}`}
      role="button"
    >
      {children}{" "}
    </button>
  );
};

export default Button;
