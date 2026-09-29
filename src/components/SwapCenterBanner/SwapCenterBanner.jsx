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

import singleVEs from "../../assets/images/single_VEs.jpeg";
import singleSVEs from "../../assets/images/single_SVEs.jpeg";
import multiVEs from "../../assets/images/multi_VEs_transparent.webp";

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
      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className={styles.content}>
        <h2>
          Swap <strong>Center</strong>
        </h2>

        <p>
          Convert eligible reward balances between supported
          currencies.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cta}
            onClick={() => navigate("/swap")}
          >
            <span>OPEN SWAP CENTER</span>
            <ArrowRight
              size={22}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </button>

          <span className={styles.liveNote}>
            <RefreshCw
              size={16}
              strokeWidth={2.2}
              aria-hidden="true"
            />
            Live conversion preview
          </span>
        </div>
      </div>

      {/* =====================================================
          HERO VISUAL
      ===================================================== */}

      <div className={styles.visual}>
        <div className={styles.glow} />
        <div className={styles.ring} />
        <div className={styles.ringSmall} />

        {/* Large wallet behind everything */}
        <div className={styles.wallet}>
          <div className={styles.walletTop}>
            <span>REWARD WALLET</span>

            <WalletCards
              size={24}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <strong>Eligible Balances</strong>

          <small>
            Supported rewards · ready to swap
          </small>

          <div className={styles.walletRows}>
            <div>
              <span className={styles.walletDotGold} />
              <i />
            </div>

            <div>
              <span className={styles.walletDotBlue} />
              <i />
            </div>
          </div>

          <div className={styles.bar}>
            <i />
          </div>
        </div>

        {/* FROM / VE */}
        <div className={`${styles.assetCard} ${styles.from}`}>
          <span className={styles.cardLabel}>FROM</span>

          <img
            src={from}
            alt={`${fromName} reward currency`}
          />

          <div className={styles.cardInfo}>
            <b>{fromName}</b>
            <small>REWARD CURRENCY</small>
          </div>
        </div>

        {/* Central swap */}
        <button
          type="button"
          className={styles.swapButton}
          onClick={handleSwap}
          aria-label={`Swap ${fromName} and ${toName}`}
          title={`Swap ${fromName} and ${toName}`}
        >
          <ArrowLeftRight
            size={45}
            strokeWidth={2.1}
            aria-hidden="true"
          />

          <span>SWAP</span>
        </button>

        {/* TO / SVE */}
        <div className={`${styles.assetCard} ${styles.to}`}>
          <span className={styles.cardLabel}>TO</span>

          <img
            src={to}
            alt={`${toName} reward currency`}
          />

          <div className={styles.cardInfo}>
            <b>{toName}</b>
            <small>REWARD CURRENCY</small>
          </div>
        </div>

        {/* Conversion arrows */}
        <div className={styles.flow} aria-hidden="true">
          <ArrowRight size={25} />
          <ArrowRight size={25} />
          <ArrowRight size={25} />
        </div>

        {/* Transparent coin pile */}
        <img
          src={multiVEs}
          alt=""
          className={styles.coinPile}
          aria-hidden="true"
        />

        {/* Status */}
        <div className={styles.status}>
          <CheckCircle2
            size={20}
            strokeWidth={2.3}
            aria-hidden="true"
          />

          <span>
            <b>
              {fromName} → {toName}
            </b>

            <small>Ready to convert</small>
          </span>

          <Sparkles
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>
    </RewardBannerShell>
  );
}