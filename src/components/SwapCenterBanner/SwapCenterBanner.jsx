import {
  ArrowLeftRight,
  ChevronRight,
  RefreshCw,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleVEs from "../../assets/images/single_VEs.jpeg";
import singleSVEs from "../../assets/images/single_SVEs.jpeg";
import gameCoin from "../../assets/images/game_coin.jpeg";

import styles from "./SwapCenterBanner.module.css";

export default function SwapCenterBanner() {
  const [isReversed, setIsReversed] = useState(false);

  const fromAsset = isReversed ? singleSVEs : singleVEs;
  const toAsset = isReversed ? singleVEs : singleSVEs;

  const fromCurrency = isReversed ? "SVE" : "VE";
  const toCurrency = isReversed ? "VE" : "SVE";

  function handleSwapDirection() {
    setIsReversed((current) => !current);
  }

  return (
    <RewardBannerShell className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.label}>
          <WalletCards size={15} />
          REWARD UTILITY
        </span>

        <h2>
          Swap <strong>Center</strong>
        </h2>

        <p>
          Convert eligible reward balances between supported VE and SVE
          currencies.
        </p>

        <div className={styles.actionRow}>
          <BannerButton to="/swap">
            Open Swap Center
          </BannerButton>

          <span className={styles.actionHint}>
            <RefreshCw size={14} />
            Fast reward conversion
          </span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.visualGlow} />

        <div className={styles.orbit + " " + styles.orbitOne} />
        <div className={styles.orbit + " " + styles.orbitTwo} />

        <img
          src={gameCoin}
          alt=""
          aria-hidden="true"
          className={styles.floatingCoin + " " + styles.coinOne}
        />

        <img
          src={gameCoin}
          alt=""
          aria-hidden="true"
          className={styles.floatingCoin + " " + styles.coinTwo}
        />

        <div className={styles.wallet}>
          <div className={styles.walletHeader}>
            <span>REWARD WALLET</span>
            <span className={styles.walletDots}>•••</span>
          </div>

          <div className={styles.walletBalance}>
            <small>Eligible Balance</small>
            <strong>
              {isReversed ? "1,240 SVE" : "1,240 VE"}
            </strong>
          </div>

          <div className={styles.walletProgress}>
            <span />
          </div>

          <div className={styles.walletFooter}>
            <span>Available</span>
            <span>Ready to swap</span>
          </div>
        </div>

        <div
          className={
            styles.currencyCard + " " + styles.fromCard
          }
        >
          <span className={styles.cardTag}>FROM</span>

          <div className={styles.coinVisual}>
            <img
              src={fromAsset}
              alt={fromCurrency + " reward coin"}
            />
          </div>

          <div className={styles.cardCurrency}>
            <strong>{fromCurrency}</strong>
            <span>Reward Currency</span>
          </div>
        </div>

        <div
          className={
            styles.currencyCard + " " + styles.toCard
          }
        >
          <span className={styles.cardTag}>TO</span>

          <div className={styles.coinVisual}>
            <img
              src={toAsset}
              alt={toCurrency + " reward coin"}
            />
          </div>

          <div className={styles.cardCurrency}>
            <strong>{toCurrency}</strong>
            <span>Reward Currency</span>
          </div>
        </div>

        <button
          type="button"
          className={styles.swapCore}
          onClick={handleSwapDirection}
          aria-label={
            "Swap " + fromCurrency + " and " + toCurrency
          }
          title="Reverse conversion"
        >
          <div className={styles.swapCoreGlow} />

          <ArrowLeftRight size={27} />

          <span>SWAP</span>
        </button>

        <div className={styles.flow + " " + styles.flowTop}>
          <ChevronRight size={18} />
          <ChevronRight size={18} />
        </div>

        <div className={styles.flow + " " + styles.flowBottom}>
          <ChevronRight size={18} />
          <ChevronRight size={18} />
        </div>

        <div className={styles.status}>
          <span className={styles.statusDot} />

          <Sparkles size={13} />

          <strong>
            {fromCurrency} → {toCurrency}
          </strong>

          <span>Ready to convert</span>
        </div>
      </div>
    </RewardBannerShell>
  );
}