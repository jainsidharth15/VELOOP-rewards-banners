import { CirclePlus, Gift, Sparkles } from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleVEs from "../../assets/images/single_VEs.jpeg";
import multiVEs from "../../assets/images/multi_VEs.jpeg";

import styles from "./BonusVEsBanner.module.css";

export default function BonusVEsBanner() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleBonusClick = () => {
    setIsHighlighted(true);

    setTimeout(() => {
      setIsHighlighted(false);
    }, 1800);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>BONUS OPPORTUNITY</span>

        <h2>
          Boost Your
          <br />
          <strong>VE Balance</strong>
        </h2>

        <p>
          Complete eligible activities and unlock additional VEs through special
          bonus opportunities.
        </p>

        <BannerButton to="/bonus">Explore Bonuses</BannerButton>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        {/* Decorative glow */}
        <div className={styles.glow}></div>

        {/* Orbit */}
        <div className={styles.orbit}></div>

        {/* Main VE visual */}
        <button
          type="button"
          tabIndex={-1}
          className={`${styles.veVisual} ${isHighlighted ? styles.active : ""}`}
          onClick={handleBonusClick}
          aria-label="Highlight bonus VE"
        >
          <img src={multiVEs} alt="VELOOP VE rewards" />

          <span className={styles.veLabel}>BONUS</span>

          <strong>VE</strong>
        </button>

        {/* Small VE */}
        <img src={singleVEs} alt="" className={styles.smallVe} />

        {/* Gift */}
        <div className={styles.gift}>
          <Gift size={38} />
        </div>

        {/* Decorative elements */}
        <Sparkles className={`${styles.sparkle} ${styles.sparkleOne}`} />

        <CirclePlus className={`${styles.sparkle} ${styles.sparkleTwo}`} />

        {/* Interaction message */}
        <div
          className={`${styles.message} ${
            isHighlighted ? styles.messageVisible : ""
          }`}
          aria-live="polite"
        >
          <Sparkles size={15} />
          Bonus opportunity highlighted
        </div>
      </div>
    </RewardBannerShell>
  );
}
