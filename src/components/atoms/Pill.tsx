import styles from "./styles.module.css";

type PillProps = {
  appearance: "primary" | "secondary" | "ternary";
};

const Pill = (props: PillProps) => {
  return <div className={styles.container}>Generic</div>;
};

export default Pill;
