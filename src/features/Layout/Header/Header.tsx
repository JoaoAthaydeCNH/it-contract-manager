import styles from "./Header.module.css";
import AppLogo from "../../../assets/images/cnhLogo.png";
import { SearchBar } from "../../../common/components/SearchBar/SearchBar";
import { NotificationButton } from "../../../common/components/Notifications/NotificationButton";
import { UserAvatar } from "../../../common/components/UserAvatar/UserAvatar";

export function Header() {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={AppLogo} alt="CNH Logo" className={styles.logo} />
        <h1>IT CONTRACT <span className={styles.redh1}>MANAGER</span></h1>
      </div>

      <div className={styles.rightSection}>
        <SearchBar />
        <NotificationButton hasNotifications={true} />
        <UserAvatar />
      </div>
    </header>
  );
}
