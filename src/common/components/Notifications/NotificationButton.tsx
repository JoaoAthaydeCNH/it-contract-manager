import styles from "./NotificationButton.module.css";
import { MdNotificationsNone } from "react-icons/md";
import { useState } from "react";

type NotificationButtonProps = {
  onClick?: () => void;
  hasNotifications?: boolean; // indicador de notificações
};

export function NotificationButton({ onClick, hasNotifications = false }: NotificationButtonProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <MdNotificationsNone className={styles.icon} />
      {hasNotifications && <span className={styles.badge}></span>}
    </button>
  );
}
