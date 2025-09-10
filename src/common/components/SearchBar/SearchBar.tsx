import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <IoMdSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Search..."
        className={styles.input}
      />
    </div>
  );
}
