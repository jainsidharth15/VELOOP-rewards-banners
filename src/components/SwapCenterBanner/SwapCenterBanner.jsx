import {
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RewardBannerShell from "../shared/RewardBannerShell";

import singleVEs from "../../assets/images/VE_clean.png";
import singleSVEs from "../../assets/images/SVE_clean.png";

import styles from "./SwapCenterBanner.module.css";

export default function SwapCenterBanner() {
  const [reverse, setReverse] = useState(false);
  const navigate = useNavigate();

  const from = reverse ? singleSVEs : singleVEs;
  const to = reverse ? singleVEs : singleSVEs;

  const fromName = reverse ? "SVE" : "VE";
  const toName = reverse ? "VE" : "SVE";

  const handleSwap = () => {
    setReverse((value) => !value);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>VELOOP REWARDS</span>
          <span className={styles.eyebrowDivider} />
          <span className={styles.eyebrowAccent}>SWAP CENTER</span>
        </div>

        <h2 className={styles.heading}>
          Move your
          <span>rewards.</span>
        </h2>

        <p className={styles.description}>
          Convert eligible VE and SVE balances in a simple two-way swap flow.
          Move your rewards when you need them.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cta}
            onClick={() => navigate("/swap")}
          >
            <span>OPEN SWAP CENTER</span>
            <span className={styles.ctaIcon}>
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>

          <span className={styles.liveNote}>
            <RefreshCw size={14} strokeWidth={2.2} />
            Live conversion preview
          </span>
        </div>

        <div className={styles.infoRail}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <WalletCards size={15} />
            </span>
            <span>
              <strong>Supported</strong>
              <small>VE ↔ SVE</small>
            </span>
          </div>

          <span className={styles.infoDivider} />

          <div className={styles.infoItem}>
            <span className={`${styles.infoIcon} ${styles.goldIcon}`}>
              <ArrowLeftRight size={15} />
            </span>
            <span>
              <strong>Two-way</strong>
              <small>Swap anytime</small>
            </span>
          </div>

          <span className={styles.infoDivider} />

          <div className={styles.infoItem}>
            <span className={`${styles.infoIcon} ${styles.purpleIcon}`}>
              <CheckCircle2 size={15} />
            </span>
            <span>
              <strong>Eligible</strong>
              <small>Ready to convert</small>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.visualOrb} aria-hidden="true" />

        <div className={styles.previewLabel}>
          <span>REWARD WALLET</span>
          <strong>Conversion preview</strong>
          <span className={styles.walletIcon}>
            <WalletCards size={16} />
          </span>
        </div>

        <div className={styles.balanceCard}>
          <span className={styles.balanceEyebrow}>SUPPORTED BALANCES</span>

          <div className={styles.balanceTitle}>
            <span>Reward wallet</span>
            <b>VE / SVE</b>
          </div>

          <div className={styles.balanceLine}>
            <span className={styles.balanceDotGold} />
            <span>VE</span>
            <i />
          </div>

          <div className={styles.balanceLine}>
            <span className={styles.balanceDotBlue} />
            <span>SVE</span>
            <i />
          </div>
        </div>

        <div className={`${styles.assetCard} ${styles.from}`}>
          <span className={styles.cardLabel}>FROM</span>
          <div className={styles.assetBody}>
            <img src={from} alt={`${fromName} reward currency`} />
            <div>
              <strong>{fromName}</strong>
              <small>REWARD CURRENCY</small>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.swapButton}
          onClick={handleSwap}
          aria-label={`Swap ${fromName} and ${toName}`}
          title={`Swap ${fromName} and ${toName}`}
        >
          <ArrowLeftRight size={27} strokeWidth={2.2} />
          <span>SWAP</span>
        </button>

        <div className={`${styles.assetCard} ${styles.to}`}>
          <span className={styles.cardLabel}>TO</span>
          <div className={styles.assetBody}>
            <img src={to} alt={`${toName} reward currency`} />
            <div>
              <strong>{toName}</strong>
              <small>REWARD CURRENCY</small>
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <CheckCircle2 size={15} />
          <span>
            <strong>
              {fromName} <b>→</b> {toName}
            </strong>
            <small>Ready to convert</small>
          </span>
          <Sparkles size={14} />
        </div>
      </div>
    </RewardBannerShell>
  );
}
