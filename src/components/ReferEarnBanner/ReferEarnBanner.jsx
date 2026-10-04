import {
  ArrowRight,
  Check,
  Copy,
  Gift,
  ShieldCheck,
  Share2,
  Sparkles,
  Users,
  Zap,
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
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.backgroundOrbOne} aria-hidden="true" />
      <div className={styles.backgroundOrbTwo} aria-hidden="true" />

      {/* LEFT: message + CTA */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowIcon}>
            <Users size={14} strokeWidth={2.4} />
          </span>
          <span>REFER &amp; EARN</span>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrowStatus}>REWARDS</span>
        </div>

        <h2 className={styles.heading}>
          Refer Friends.
          <span>Earn Rewards.</span>
        </h2>

        <p className={styles.description}>
          Invite your friends to VELOOP Rewards and unlock exciting rewards
          when they complete eligible activities.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/refer">
            Invite Friends
          </BannerButton>

          <div className={styles.actionNote}>
            <Share2 size={14} />
            <span>Share your referral. Grow together.</span>
          </div>
        </div>

        {/* Value proposition rail */}
        <div className={styles.valueRail}>
          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>
              <Share2 size={15} />
            </span>
            <span>
              <strong>Easy to share</strong>
              <small>Send your code</small>
            </span>
          </div>

          <div className={styles.valueDivider} />

          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>
              <Gift size={15} />
            </span>
            <span>
              <strong>Unlock rewards</strong>
              <small>Earn when eligible</small>
            </span>
          </div>

          <div className={styles.valueDivider} />

          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>
              <ShieldCheck size={15} />
            </span>
            <span>
              <strong>Secure referral</strong>
              <small>Built into VELOOP</small>
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: large referral visual */}
      <div className={styles.visual}>
        <div className={styles.visualGlow} aria-hidden="true" />

        <div className={styles.visualLabel}>
          <Sparkles size={13} />
          <span>SHARE • INVITE • EARN</span>
        </div>

        <div className={styles.imageFrame}>
          <img
            src={referEarnHero}
            alt="VELOOP referral experience with friends and a referral reward screen"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
          <div className={styles.imageVignette} />
        </div>

        {/* Referral code floating card */}
        <div className={styles.codeCard}>
          <div className={styles.codeTopline}>
            <span>Your Referral Code</span>
            <span className={styles.liveDot} />
          </div>

          <div className={styles.codeRow}>
            <strong>{referralCode}</strong>

            <button
              type="button"
              className={styles.copyButton}
              onClick={handleCopy}
              aria-label={
                copied ? "Referral code copied" : "Copy referral code"
              }
              title={copied ? "Copied" : "Copy referral code"}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Reward journey overlay */}
        <div className={styles.rewardJourney}>
          <div className={styles.journeyStep}>
            <span className={styles.journeyIcon}>
              <Users size={14} />
            </span>
            <span>
              <small>1</small>
              <strong>Invite</strong>
            </span>
          </div>

          <span className={styles.journeyArrow}>
            <ArrowRight size={14} />
          </span>

          <div className={styles.journeyStep}>
            <span className={styles.journeyIcon}>
              <Zap size={14} />
            </span>
            <span>
              <small>2</small>
              <strong>Activity</strong>
            </span>
          </div>

          <span className={styles.journeyArrow}>
            <ArrowRight size={14} />
          </span>

          <div className={styles.journeyStep}>
            <span className={`${styles.journeyIcon} ${styles.journeyReward}`}>
              <Gift size={14} />
            </span>
            <span>
              <small>3</small>
              <strong>Reward</strong>
            </span>
          </div>
        </div>

        {/* Floating reward tokens */}
        <div className={`${styles.floatToken} ${styles.tokenOne}`} aria-hidden="true">
          V
        </div>
        <div className={`${styles.floatToken} ${styles.tokenTwo}`} aria-hidden="true">
          V
        </div>

        {/* Small reward cue remains inside the journey card rather than adding
            another competing floating panel. */}
      </div>
    </RewardBannerShell>
  );
}
