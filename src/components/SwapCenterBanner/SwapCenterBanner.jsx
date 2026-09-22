import { ArrowLeftRight, RefreshCw } from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleVEs from "../../assets/images/single_VEs.jpeg";
import singleSVEs from "../../assets/images/single_SVEs.jpeg";

import styles from "./SwapCenterBanner.module.css";

export default function SwapCenterBanner() {
  const [isReversed, setIsReversed] = useState(false);

  const fromAsset = isReversed ? singleSVEs : singleVEs;
  const toAsset = isReversed ? singleVEs : singleSVEs;

  const fromCurrency = isReversed ? "SVE" : "VE";
  const toCurrency = isReversed ? "VE" : "SVE";

  const handleSwapDirection = () => {
    setIsReversed((current) => !current);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>REWARD UTILITY</span>

        <h2>
          Swap <strong>Center</strong>
        </h2>

        <p>
          Convert eligible reward balances between supported VE and SVE
          currencies.
        </p>

        <BannerButton to="/swap">Open Swap Center</BannerButton>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        <div className={styles.conversionArea}>
          {/* FROM CARD */}
          <div className={styles.currencyCard}>
            <span className={styles.cardLabel}>FROM</span>

            <div className={styles.currencyVisual}>
              <img src={fromAsset} alt={`${fromCurrency} reward`} />
            </div>

            <strong className={styles.currencyName}>{fromCurrency}</strong>
          </div>

          {/* SWAP BUTTON */}
          <button
            type="button"
            className={styles.swapButton}
            onClick={handleSwapDirection}
            aria-label="Reverse swap direction"
            title="Reverse swap direction"
          >
            <ArrowLeftRight size={25} />

            <span className={styles.swapHint}>Swap</span>
          </button>

          {/* TO CARD */}
          <div className={styles.currencyCard}>
            <span className={styles.cardLabel}>TO</span>

            <div className={styles.currencyVisual}>
              <img src={toAsset} alt={`${toCurrency} reward`} />
            </div>

            <strong className={styles.currencyName}>{toCurrency}</strong>
          </div>
        </div>

        {/* Conversion status */}
        <div className={styles.status}>
          <RefreshCw size={15} />
          <span>
            {fromCurrency} → {toCurrency}
          </span>
        </div>
      </div>
    </RewardBannerShell>
  );
}
