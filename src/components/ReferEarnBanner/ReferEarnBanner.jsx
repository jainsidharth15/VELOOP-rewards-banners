import { Gift, Users, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import multiVEs from "../../assets/images/multi_VEs.jpeg";

import styles from "./ReferEarnBanner.module.css";

export default function ReferEarnBanner() {
  const [copied, setCopied] = useState(false);

  const referralCode = "VELOOP123";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to copy referral code:", error);
    }
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>
          <Users size={16} />
          REFER & EARN
        </span>

        <h2>
          Refer Friends,
          <br />
          <strong>Earn Rewards</strong>
        </h2>

        <p>
          Invite your friends to VELOOP Rewards and unlock exciting rewards when
          they complete eligible activities.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/refer">Invite Now</BannerButton>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        {/* Decorative orbit */}
        <div className={styles.orbit}></div>

        {/* VE reward image */}
        <img
          src={multiVEs}
          alt="VELOOP reward coins"
          className={styles.veImage}
        />

        {/* Gift */}
        <div className={styles.gift}>
          <Gift size={58} strokeWidth={1.7} />
        </div>

        {/* Referral code */}
        <div className={styles.codeCard}>
          <div>
            <small>Your Referral Code</small>
            <strong>{referralCode}</strong>
          </div>

          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy referral code"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>

        {/* Decorative sparkles */}
        <Sparkles className={`${styles.sparkle} ${styles.sparkleOne}`} />
        <Sparkles className={`${styles.sparkle} ${styles.sparkleTwo}`} />
      </div>

      {/* BENEFITS */}
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Users size={18} />
          </div>

          <div>
            <strong>Easy to Share</strong>
            <span>Invite friends using your code</span>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Gift size={18} />
          </div>

          <div>
            <strong>Earn Rewards</strong>
            <span>Unlock rewards for eligible referrals</span>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Sparkles size={18} />
          </div>

          <div>
            <strong>More Opportunities</strong>
            <span>Explore additional reward activities</span>
          </div>
        </div>
      </div>
    </RewardBannerShell>
  );
}
