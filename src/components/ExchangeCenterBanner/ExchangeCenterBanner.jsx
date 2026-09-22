import {
  CheckCircle2,
  CreditCard,
  Gift,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleVE from "../../assets/images/single_VEs.jpeg";

import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeCenterBanner() {
  const [selectedReward, setSelectedReward] = useState("UPI");

  const rewardOptions = [
    {
      id: "UPI",
      label: "UPI",
      description: "Direct payout",
      icon: Smartphone,
    },
    {
      id: "Gift Card",
      label: "Gift Card",
      description: "Supported vouchers",
      icon: Gift,
    },
    {
      id: "Reward Card",
      label: "Reward Card",
      description: "Redeem rewards",
      icon: CreditCard,
    },
  ];

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>REDEEM YOUR REWARDS</span>

        <h2>
          Exchange <strong>Center</strong>
        </h2>

        <p>
          Explore available redemption options and exchange eligible VEs for
          supported rewards.
        </p>

        <BannerButton to="/exchange">Open Exchange Center</BannerButton>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        <div className={styles.redemptionFlow}>
          {/* VE BALANCE */}
          <div className={styles.balanceCard}>
            <div className={styles.balanceHeader}>
              <span>YOUR BALANCE</span>
              <WalletCards size={17} />
            </div>

            <div className={styles.balanceContent}>
              <div className={styles.veImageWrapper}>
                <img src={singleVE} alt="VE reward coin" />
              </div>

              <div>
                <strong>2,450</strong>
                <span>Demo VE balance</span>
              </div>
            </div>
          </div>

          {/* FLOW ARROW */}
          <div className={styles.flowArrow}>
            <span>REDEEM</span>
            <div className={styles.arrowLine}></div>
          </div>

          {/* REWARD OPTIONS */}
          <div className={styles.rewardOptions}>
            {rewardOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedReward === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={`${styles.rewardOption} ${
                    isSelected ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedReward(option.id)}
                  aria-pressed={isSelected}
                >
                  <div className={styles.optionIcon}>
                    <Icon size={20} />
                  </div>

                  <div className={styles.optionText}>
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </div>

                  {isSelected && (
                    <CheckCircle2
                      size={17}
                      className={styles.selectedIcon}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECTED REWARD STATUS */}
        <div className={styles.status}>
          <CheckCircle2 size={15} />

          <span>{selectedReward} selected for redemption</span>
        </div>
      </div>
    </RewardBannerShell>
  );
}
