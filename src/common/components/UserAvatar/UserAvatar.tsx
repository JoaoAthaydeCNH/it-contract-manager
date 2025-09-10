import styles from "./UserAvatar.module.css";

type UserAvatarProps = {
  name?: string;
};

export function UserAvatar({ name = "Andrade Alexandre" }: UserAvatarProps) {

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return <div className={styles.avatar}>{initials}</div>;
}
