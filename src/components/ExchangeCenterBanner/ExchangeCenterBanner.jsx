import {
  ArrowLeftRight,
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  Gift,
  RefreshCw,
  Smartphone,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleVE from "../../assets/images/single_VEs.jpeg";
import singleGem from "../../assets/images/single_gem_transparent_v2.webp";
import multiGems from "../../assets/images/multi_gems_transparent_v2.webp";

import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeCenterBanner() {
  const [selected, setSelected] = useState("UPI");

  const options = [
    {
      id: "UPI",
      label: "UPI",
      desc: "Direct payout",
      icon: Smartphone,
    },
    {
      id: "Gift Card",
      label: "Gift Card",
      desc: "Supported vouchers",
      icon: Gift,
    },
    {
      id: "Reward Card",
      label: "Reward Card",
      desc: "Redeem rewards",
      icon: CreditCard,
    },
  ];

  return (
    <RewardBannerShell className={styles.banner}>
      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className={styles.content}>
        <span className={styles.label}>
          <WalletCards
            size={19}
            strokeWidth={2.1}
            aria-hidden="true"
          />
          <span>REDEEM YOUR REWARDS</span>
        </span>

        <h2>
          Exchange <strong>Center</strong>
        </h2>

        <p>
          Explore available redemption options and exchange
          eligible VEs for supported rewards.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/exchange">
            Open Exchange Center
          </BannerButton>

          <span className={styles.actionNote}>
            <Sparkles
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>Choose how to redeem</span>
          </span>
        </div>

        <div className={styles.micro}>
          <span>VE BALANCE</span>

          <ArrowRight
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>REDEEM</span>

          <ArrowRight
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>REWARD</span>
        </div>
      </div>

      {/* =====================================================
          RIGHT VISUAL
      ===================================================== */}

      <div className={styles.visual}>
        <div className={styles.glow} />
        <div className={styles.ring} />
        <div className={styles.ringSmall} />

        {/* =================================================
            SOURCE BALANCE
        ================================================= */}

        <div className={styles.wallet}>
          <div className={styles.walletTop}>
            <div>
              <span>YOUR BALANCE</span>
              <strong>VE REWARDS</strong>
            </div>

            <div className={styles.walletIcon}>
              <WalletCards
                size={21}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={styles.balanceRow}>
            <div className={styles.coinFrame}>
              <img
                src={singleVE}
                alt="VE reward coin"
              />
            </div>

            <div className={styles.balanceCopy}>
              <strong>VE</strong>
              <span>Eligible reward balance</span>
            </div>
          </div>

          <div className={styles.progress}>
            <i />
          </div>

          <div className={styles.walletFoot}>
            <span>Available for redemption</span>

            <CheckCircle2
              size={16}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =================================================
            TRAVELING REDEMPTION FLOW
        ================================================= */}

        <div className={styles.flowRail} aria-hidden="true">
          <span className={styles.flowGlow} />

          <span className={styles.flowLine} />

          <span
            className={`${styles.flowArrow} ${styles.flowArrowOne}`}
          >
            <ArrowRight size={24} strokeWidth={2.2} />
          </span>

          <span
            className={`${styles.flowArrow} ${styles.flowArrowTwo}`}
          >
            <ArrowRight size={24} strokeWidth={2.2} />
          </span>

          <span
            className={`${styles.flowArrow} ${styles.flowArrowThree}`}
          >
            <ArrowRight size={24} strokeWidth={2.2} />
          </span>

          <span className={styles.flowLabel}>REDEEM</span>
        </div>

        {/* =================================================
            EXCHANGE RATE
        ================================================= */}

        <div className={styles.exchangeRate}>
          <div className={styles.rateHeading}>
            <RefreshCw
              size={15}
              strokeWidth={2.1}
              aria-hidden="true"
            />
            <span>EXCHANGE RATE</span>
          </div>

          <div className={styles.rateFlow}>
            <div className={styles.rateAsset}>
              <img
                src={singleVE}
                alt=""
                aria-hidden="true"
              />
              <span>VE</span>
            </div>

            <ArrowLeftRight
              size={25}
              strokeWidth={2}
              aria-hidden="true"
            />

            <div className={styles.rateAsset}>
              <img
                src={singleGem}
                alt=""
                aria-hidden="true"
              />
              <span>REWARD</span>
            </div>
          </div>

          <small>Rate preview shown at redemption</small>
        </div>

        {/* =================================================
            REWARD VISUAL
        ================================================= */}

        <div className={styles.rewardVisual}>
          <div className={styles.rewardGlow} />

          <img
            src={multiGems}
            alt="Reward gems"
            className={styles.gem}
          />

          <div className={styles.rewardBadge}>
            <Sparkles
              size={13}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>REWARD VALUE</span>
          </div>
        </div>

        {/* =================================================
            REDEMPTION OPTIONS
        ================================================= */}

        <div className={styles.rewardStack}>
          <div className={styles.rewardLabel}>
            <Sparkles
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>REDEMPTION OPTIONS</span>
          </div>

          <div className={styles.options}>
            {options.map(
              ({
                id,
                label,
                desc,
                icon: Icon,
              }) => {
                const active = selected === id;

                return (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.option} ${
                      active ? styles.active : ""
                    }`}
                    onClick={() => setSelected(id)}
                    aria-pressed={active}
                  >
                    <span className={styles.optionIcon}>
                      <Icon
                        size={21}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <span className={styles.optionText}>
                      <b>{label}</b>
                      <small>{desc}</small>
                    </span>

                    <span className={styles.optionCheck}>
                      {active ? (
                        <CheckCircle2
                          size={20}
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className={styles.emptyCheck} />
                      )}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* =================================================
            SELECTED STATUS
        ================================================= */}

        <div className={styles.status}>
          <span className={styles.statusIcon}>
            <Check
              size={15}
              strokeWidth={2.8}
              aria-hidden="true"
            />
          </span>

          <span className={styles.statusText}>
            <b>{selected}</b>
            <small>Selected for redemption</small>
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
