import styles from "./RewardBannerShell.module.css";

export default function RewardBannerShell({ children, className = "" }) {
  return <article className={`${styles.banner} ${className}`}>{children}</article>;
}