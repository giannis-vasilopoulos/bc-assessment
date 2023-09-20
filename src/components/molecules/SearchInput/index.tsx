import Search from "@/assets/svg/search.svg";
import styles from "./SearchInput.module.css";

export function SearchInput() {
  return (
    <div className={`flexCenter ${styles.searchContainer}`}>
      <Search />
      <input
        type="text"
        placeholder="Zoerken ..."
        className={styles.searchInput}
      />
    </div>
  );
}
