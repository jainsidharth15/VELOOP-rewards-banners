import {
  ArrowRight,
  Check,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleGem from "../../assets/images/single_gem_transparent_v2.webp";
import multiGems from "../../assets/images/multi_gems_transparent_v2.webp";

import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaTasksBanner() {
  const [value, setValue] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verify = () => {
    const correct =
      value.trim().toUpperCase() === "K7M4";

    setVerified(correct);
    setError(!correct);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setError(false);
    setVerified(false);
  };

  const handleReset = () => {
    setValue("");
    setError(false);
    setVerified(false);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className={styles.content}>
        <span className={styles.label}>
          <ShieldCheck
            size={18}
            strokeWidth={2.1}
            aria-hidden="true"
          />

          <span>TASK · VERIFY · REWARD</span>
        </span>

        <h2>
          Solve Captchas.
          <br />
          <strong>Earn Gems.</strong>
        </h2>

        <p>
          Complete simple captcha tasks accurately and earn
          eligible Gem rewards.
        </p>

        <div className={styles.actions}>
          <BannerButton to="/captcha">
            Start Task
          </BannerButton>

          <span>
            <ShieldCheck
              size={15}
              strokeWidth={2.1}
              aria-hidden="true"
            />

            <span>Task-based earning</span>
          </span>
        </div>

        <div className={styles.steps}>
          <span className={styles.done}>
            <b>01</b>
            <strong>CAPTCHA</strong>
          </span>

          <i aria-hidden="true" />

          <span className={verified ? styles.done : ""}>
            <b>02</b>
            <strong>VERIFY</strong>
          </span>

          <i aria-hidden="true" />

          <span className={verified ? styles.done : ""}>
            <b>03</b>
            <strong>REWARD</strong>
          </span>
        </div>
      </div>

      {/* =====================================================
          RIGHT VISUAL
      ===================================================== */}

      <div className={styles.visual}>
        <div className={styles.glow} />
        <div className={styles.purpleRing} />
        <div className={styles.visualGrid} aria-hidden="true" />
        <div className={styles.rewardOrb} aria-hidden="true">
          <span>+ GEMS</span>
        </div>

        {/* =================================================
            GEM HERO
        ================================================= */}

        <div
          className={`${styles.gemHero} ${
            verified ? styles.gemHeroActive : ""
          }`}
        >
          <img
            src={multiGems}
            alt="Purple reward gems"
          />

          <div className={styles.gemBadge}>
            <img
              src={singleGem}
              alt=""
              aria-hidden="true"
            />

            <span>GEMS REWARD</span>
          </div>
        </div>

        {/* =================================================
            CAPTCHA TASK CARD
        ================================================= */}

        <div
          className={`${styles.taskCard} ${
            verified
              ? styles.taskCardSuccess
              : error
                ? styles.taskCardError
                : ""
          }`}
        >
          <div className={styles.cardTop}>
            <div className={styles.shield}>
              <ShieldCheck
                size={23}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>

            <div>
              <small>SECURE TASK</small>
              <strong>Captcha Verification</strong>
            </div>

            <button
              type="button"
              className={styles.refreshButton}
              onClick={handleReset}
              aria-label="Reset captcha"
              title="Reset captcha"
            >
              <RefreshCw
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* CAPTCHA CODE */}
          <div className={styles.captchaDisplay}>
            <span>K7M4</span>

            <Sparkles
              size={21}
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </div>

          {/* INPUT + VERIFY */}
          <div className={styles.inputRow}>
            <input
              value={value}
              onChange={handleInputChange}
              placeholder="Enter captcha"
              maxLength={4}
              autoComplete="off"
              spellCheck="false"
              aria-label="Enter captcha"
              aria-invalid={error}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  verify();
                }
              }}
            />

            <button
              type="button"
              onClick={verify}
              disabled={!value.trim()}
              aria-pressed={verified}
            >
              {verified ? (
                <>
                  <Check
                    size={18}
                    strokeWidth={2.7}
                    aria-hidden="true"
                  />

                  <span>Verified</span>
                </>
              ) : (
                <span>Verify</span>
              )}
            </button>
          </div>

          {/* VERIFICATION STATUS */}
          <div
            className={`${styles.status} ${
              verified
                ? styles.success
                : error
                  ? styles.error
                  : ""
            }`}
            aria-live="polite"
          >
            {verified ? (
              <>
                <CheckCircle2
                  size={17}
                  strokeWidth={2.3}
                  aria-hidden="true"
                />

                <span>
                  Captcha verified — reward unlocked
                </span>
              </>
            ) : error ? (
              <>
                <RefreshCw
                  size={16}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />

                <span>
                  Verification failed — try again
                </span>
              </>
            ) : (
              <>
                <ShieldCheck
                  size={16}
                  strokeWidth={2.1}
                  aria-hidden="true"
                />

                <span>
                  Verification required
                </span>
              </>
            )}
          </div>
        </div>

        {/* =================================================
            PROCESS FLOW
        ================================================= */}

        <div className={styles.flow}>
          <span className={styles.flowActive}>
            CAPTCHA
          </span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span
            className={
              verified
                ? styles.flowActive
                : ""
            }
          >
            VERIFY
          </span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span
            className={
              verified
                ? styles.flowActive
                : ""
            }
          >
            REWARD
          </span>
        </div>

        {/* =================================================
            REWARD STATUS
        ================================================= */}

        <div
          className={`${styles.rewardPill} ${
            verified
              ? styles.rewardPillActive
              : ""
          }`}
        >
          {verified ? (
            <CheckCircle2
              size={17}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          ) : (
            <Zap
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}

          <span>
            {verified
              ? "Gem reward unlocked"
              : "Accurate tasks unlock eligible rewards"}
          </span>
        </div>
      </div>
    </RewardBannerShell>
  );
}