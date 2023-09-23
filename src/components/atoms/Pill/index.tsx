import classNames from "classnames";
import styles from "./Pill.module.css";

type PillProps = {
  appearance?: "primary" | "secondary" | "alt";
  text: string;
  className?: string;
};

export const Pill = ({
  appearance = "primary",
  text,
  className
}: PillProps) => {
  return (
    <div
      className={classNames(styles.container, styles[appearance], className)}
    >
      {text}
    </div>
  );
};

export default Pill;
