import {
  ArrowRight,
  Check,
  Copy,
  Gift,
  Sparkles,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import gameCoin from "../../assets/images/game_coin.jpeg";
import multiVEs from "../../assets/images/multi_VEs.jpeg";

import styles from "./ReferEarnBanner.module.css";

export default function ReferEarnBanner() {
  const [copied, setCopied] = useState(false);

  const referralCode = "VELOOP123";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy referral code:", error);
    }
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>
          <Users size={15} />
          REFER &amp; EARN
        </span>

        <h2>
          Invite Friends.
          <br />
          <strong>Unlock Rewards.</strong>
        </h2>

        <p>
          Share VELOOP with friends and unlock exciting rewards when they
          complete eligible activities.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/refer">Invite Now</BannerButton>

          <span className={styles.actionHint}>
            <Zap size={14} />
            Share &amp; earn together
          </span>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div
        className={styles.visual}
        aria-label="Referral rewards illustration"
      >
        <div className={styles.ambientGlow} />

        <div
          className={`${styles.orbit} ${styles.orbitOne}`}
          aria-hidden="true"
        />

        <div
          className={`${styles.orbit} ${styles.orbitTwo}`}
          aria-hidden="true"
        />

        {/* REFERRAL CODE */}
        <div className={styles.codeCard}>
          <div className={styles.codeInfo}>
            <small>Your Referral Code</small>
            <strong>{referralCode}</strong>
          </div>

          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy referral code"
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
          </button>
        </div>

        {/* YOU */}
        <div className={`${styles.player} ${styles.playerYou}`}>
          <div className={`${styles.avatar} ${styles.avatarBlue}`}>
            <UserRound size={25} />
          </div>

          <span>You</span>
        </div>

        {/* FRIEND */}
        <div className={`${styles.player} ${styles.playerFriend}`}>
          <div className={`${styles.avatar} ${styles.avatarPurple}`}>
            <UserRound size={25} />
          </div>

          <span>Friend</span>
        </div>

        {/* CONNECTION */}
        <div className={styles.connectionLine} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {/* CENTRAL REWARD */}
        <div className={styles.gift}>
          <div className={styles.giftGlow} />

          <Gift size={57} strokeWidth={1.65} />

          <span>REWARD</span>
        </div>

        {/* COIN REWARD */}
        <div className={styles.rewardCoins}>
          <img
            src={multiVEs}
            alt="Stack of VE reward coins"
          />
        </div>

        {/* FLOATING COINS */}
        <img
          src={gameCoin}
          alt="VELOOP game reward coin"
          className={`${styles.gameCoin} ${styles.gameCoinOne}`}
        />

        <img
          src={gameCoin}
          alt=""
          aria-hidden="true"
          className={`${styles.gameCoin} ${styles.gameCoinTwo}`}
        />

        {/* REWARD BADGE */}
        <div className={styles.rewardBadge}>
          <Sparkles size={14} />
          <span>Rewards unlocked</span>
        </div>

        {/* FLOW ARROW */}
        <ArrowRight
          className={styles.flowArrow}
          size={21}
          aria-hidden="true"
        />
      </div>

      {/* BENEFITS */}
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Users size={17} />
          </div>

          <div>
            <strong>Invite Friends</strong>
            <span>Share your referral code</span>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Gift size={17} />
          </div>

          <div>
            <strong>Unlock Rewards</strong>
            <span>Earn from eligible referrals</span>
          </div>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Sparkles size={17} />
          </div>

          <div>
            <strong>Play Together</strong>
            <span>Discover more reward activities</span>
          </div>
        </div>
      </div>
    </RewardBannerShell>
  );
}