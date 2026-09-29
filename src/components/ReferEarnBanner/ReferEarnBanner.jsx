import {
  ArrowRight,
  Check,
  Copy,
  Gift,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import referEarnHero from "../../assets/images/refer-earn-hero.jpg";

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
      {/* =========================
          CONTENT
      ========================= */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <Users size={15} strokeWidth={2.2} />
          <span>REFER &amp; EARN</span>
        </div>

        <h2 className={styles.heading}>
          Refer Friends,
          <span>Earn Rewards.</span>
        </h2>

        <p className={styles.description}>
          Invite your friends to VELOOP Rewards and unlock exciting rewards
          when they complete eligible activities.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/refer">
            Invite Friends
            <ArrowRight size={17} />
          </BannerButton>

          <div className={styles.actionNote}>
            <Sparkles size={14} />
            <span>Share the opportunity</span>
          </div>
        </div>

        {/* Small value highlights */}
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <Users size={16} />
            </div>

            <div>
              <strong>Invite</strong>
              <span>Friends</span>
            </div>
          </div>

          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <Gift size={16} />
            </div>

            <div>
              <strong>Unlock</strong>
              <span>Rewards</span>
            </div>
          </div>

          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <ShieldCheck size={16} />
            </div>

            <div>
              <strong>Secure</strong>
              <span>Referral</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          HERO VISUAL
      ========================= */}
      <div className={styles.visual}>
        <div className={styles.visualGlow} />

        <div className={styles.imageFrame}>
          <img
            src={referEarnHero}
            alt="VELOOP referral experience with friends and a referral reward screen"
            className={styles.heroImage}
          />

          <div className={styles.imageShade} />
        </div>

        {/* Referral code card */}
        <div className={styles.codeCard}>
          <div className={styles.codeContent}>
            <span>Your Referral Code</span>
            <strong>{referralCode}</strong>
          </div>

          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label={
              copied ? "Referral code copied" : "Copy referral code"
            }
            title={copied ? "Copied" : "Copy referral code"}
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
          </button>
        </div>

        {/* Small floating reward badge */}
        <div className={styles.rewardBadge}>
          <Sparkles size={14} />
          <span>Share • Invite • Earn</span>
        </div>

        {/* Decorative VE element */}
        <div className={styles.veOrb} aria-hidden="true">
          V
        </div>
      </div>
    </RewardBannerShell>
  );
}