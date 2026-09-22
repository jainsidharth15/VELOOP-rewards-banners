import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./BannerButton.module.css";

export default function BannerButton({ children, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
    >
      <span>{children}</span>

      <ArrowRight
        size={18}
        aria-hidden="true"
      />
    </button>
  );
}