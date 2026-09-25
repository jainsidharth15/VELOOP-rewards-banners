import { CirclePlus, Gift, Sparkles, ArrowUpRight } from "lucide-react";
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
      {/* =========================
          LEFT CONTENT
      ========================== */}
      <div className={styles.content}>
        <span className={styles.label}>BONUS OPPORTUNITY</span>

        <h2>
          Get Extra
          <br />
          <strong>VE Rewards.</strong>
        </h2>

        <p>
          Complete eligible activities and unlock additional VEs through
          special bonus opportunities.
        </p>

        <div className={styles.ctaRow}>
          <BannerButton to="/bonus">
            Explore Bonuses
          </BannerButton>

          <span className={styles.actionHint}>
            <Sparkles size={15} />
            Discover bonus rewards
          </span>
        </div>
      </div>

      {/* =========================
          RIGHT VISUAL
      ========================== */}
      <div className={styles.visual}>
        {/* Background glow */}
        <div className={styles.glow}></div>

        {/* Orbit rings */}
        <div className={styles.orbit}></div>

        {/* Decorative top coin */}
        <img
          src={singleVEs}
          alt=""
          className={styles.smallVe}
        />

        {/* Main bonus reward */}
        <button
          type="button"
          className={`${styles.veVisual} ${
            isHighlighted ? styles.active : ""
          }`}
          onClick={handleBonusClick}
          aria-label="Highlight bonus VE rewards"
        >
          <div className={styles.bonusIcon}>
            <Gift size={30} />
          </div>

          <img
            src={multiVEs}
            alt="VELOOP VE rewards"
          />

          <span className={styles.veLabel}>BONUS</span>

          <strong>VE</strong>
        </button>

        {/* Floating gift */}
        <div className={styles.gift}>
          <Gift size={38} />
        </div>

        {/* Decorative sparkle */}
        <Sparkles
          className={`${styles.sparkle} ${styles.sparkleOne}`}
        />

        <CirclePlus
          className={`${styles.sparkle} ${styles.sparkleTwo}`}
        />

        {/* Small decorative arrow */}
        <div className={styles.visualArrow}>
          <ArrowUpRight size={18} />
        </div>

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