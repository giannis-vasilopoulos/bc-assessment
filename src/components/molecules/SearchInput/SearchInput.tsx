import Search from "@/assets/svg/search.svg";
import styles from "./SearchInput.module.css";
import classNames from "classnames";

export function SearchInput() {
  return (
    <div className={classNames("flexCenter", styles.searchContainer)}>
      <Search />
      <input
        type="text"
        placeholder="Zoerken ..."
        className={styles.searchInput}
      />
    </div>
  );
}
