import { ArrowRight } from "lucide-react";
import { Children, isValidElement } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./BannerButton.module.css";

export default function BannerButton({ children, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  const hasArrow = Children.toArray(children).some(
    (child) =>
      isValidElement(child) && child.type === ArrowRight
  );

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
    >
      <span>{children}</span>

      {!hasArrow && (
        <ArrowRight
          size={18}
          aria-hidden="true"
        />
      )}
    </button>
  );
}