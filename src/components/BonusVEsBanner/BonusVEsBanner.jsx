import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Gift,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RewardBannerShell from "../shared/RewardBannerShell";

import singleVEs from "../../assets/images/VE_clean.png";
import multiVEsTransparent from "../../assets/images/multi_VEs_transparent.webp";

import styles from "./BonusVEsBanner.module.css";

export default function BonusVEsBanner() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleBonusClick = () => {
    setActive((value) => !value);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      <div className={styles.content}>
        <h2>
          Boost Your
          <br />
          <strong>VE Balance</strong>
        </h2>

        <div className={styles.headingLine} aria-hidden="true">
          <span />
        </div>

        <p>
          Complete eligible activities and unlock bonus VEs
          through daily tasks, referrals, and special opportunities.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cta}
            onClick={() => navigate("/bonus")}
          >
            <span>EXPLORE BONUSES</span>

            <span className={styles.ctaIcon}>
              <ArrowRight
                size={21}
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </span>
          </button>

          <span className={styles.actionNote}>
            <TrendingUp
              size={16}
              strokeWidth={2.2}
              aria-hidden="true"
            />
            More activities, more value
          </span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow} />
        <div className={styles.ring} />
        <div className={styles.ringTwo} />

        <div className={styles.taskList}>
          <div className={styles.taskCard}>
            <div className={styles.taskIcon}>
              <ClipboardCheck size={25} strokeWidth={1.9} aria-hidden="true" />
            </div>
            <div className={styles.taskContent}>
              <b>Daily Check-in</b>
              <small>Stay active</small>
            </div>
            <span className={styles.taskCheck}>
              <Check size={17} strokeWidth={2.8} aria-hidden="true" />
            </span>
          </div>

          <div className={styles.taskCard}>
            <div className={styles.taskIcon}>
              <Users size={25} strokeWidth={1.9} aria-hidden="true" />
            </div>
            <div className={styles.taskContent}>
              <b>Invite Friends</b>
              <small>Grow together</small>
            </div>
            <span className={styles.taskCheck}>
              <Check size={17} strokeWidth={2.8} aria-hidden="true" />
            </span>
          </div>

          <div className={styles.taskCard}>
            <div className={styles.taskIcon}>
              <BarChart3 size={25} strokeWidth={1.9} aria-hidden="true" />
            </div>
            <div className={styles.taskContent}>
              <b>Complete Tasks</b>
              <small>Earn more</small>
            </div>
            <span className={styles.taskCheck}>
              <Check size={17} strokeWidth={2.8} aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className={styles.energyFlow} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <button
          type="button"
          className={`${styles.bonusDial} ${active ? styles.active : ""}`}
          onClick={handleBonusClick}
          aria-label={active ? "Bonus VE reward is active" : "Activate bonus VE reward"}
          aria-pressed={active}
          title={active ? "Bonus active" : "Activate bonus preview"}
        >
          <span className={styles.dialGlow} />
          <span className={styles.dialOuter} />
          <span className={styles.dialInner}>
            <span>BONUS</span>
            <strong>VE</strong>
            <small>{active ? "BONUS ACTIVE" : "MORE VALUE"}</small>
          </span>
        </button>

        <div
          className={`${styles.plusOrb} ${active ? styles.plusOrbActive : ""}`}
          aria-hidden="true"
        >
          <Gift size={25} strokeWidth={2} />
          <span>+</span>
        </div>

        <div className={styles.rewardStage}>
          <div className={styles.stageGlow} />

          <div className={styles.stageBase}>
            <div className={styles.stageTop} />

            <div className={styles.stageFront}>
              <span>VE</span>
              <div className={styles.stageMark}>
                <Sparkles size={16} strokeWidth={2.2} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.rewardCoin}>
            <img src={singleVEs} alt="VE reward coin" />
          </div>

          <div className={styles.rewardLight} />
        </div>

        <div className={styles.vault}>
          <div className={styles.vaultTop}>
            <span>VE REWARDS</span>
            <div className={styles.vaultLight}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={styles.vaultBody}>
            <div className={styles.vaultGlow} />

            <img
              src={multiVEsTransparent}
              alt=""
              className={styles.vaultRewardArt}
              aria-hidden="true"
            />

            <div className={styles.vaultDoor}>
              <div className={styles.vaultHandle}>
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.vaultLock}>
                <Gift size={19} strokeWidth={1.8} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={singleVEs}
          alt=""
          className={`${styles.floatingCoin} ${styles.coinOne}`}
          aria-hidden="true"
        />

        <img
          src={singleVEs}
          alt=""
          className={`${styles.floatingCoin} ${styles.coinTwo}`}
          aria-hidden="true"
        />

        <Sparkles
          className={styles.sparkleOne}
          size={19}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <Sparkles
          className={styles.sparkleTwo}
          size={14}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <div className={`${styles.status} ${active ? styles.statusActive : ""}`}>
          <Sparkles size={16} strokeWidth={2} aria-hidden="true" />
          <span>{active ? "Bonus opportunity active" : "Tap VE to preview"}</span>
        </div>
      </div>
    </RewardBannerShell>
  );
}
