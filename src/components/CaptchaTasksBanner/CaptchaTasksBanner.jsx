import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

import RewardBannerShell from "../shared/RewardBannerShell";
import BannerButton from "../shared/BannerButton";

import singleGem from "../../assets/images/single_gem.jpeg";

import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaTasksBanner() {
  const [captcha, setCaptcha] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const captchaInputRef = useRef(null);

  const correctCaptcha = "K7M4";

  const handleVerify = () => {
    const value = captcha.trim().toUpperCase();

    if (value === correctCaptcha) {
      setVerified(true);
      setError(false);
    } else {
      setVerified(false);
      setError(true);
    }
  };

  const handleInputChange = (event) => {
    setCaptcha(event.target.value);
    setError(false);
    setVerified(false);
  };

  return (
    <RewardBannerShell className={styles.banner}>
      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.label}>TASK · VERIFY · REWARD</span>

        <h2>
          Complete
          <br />
          <strong>Captcha Tasks</strong>
        </h2>

        <p>
          Complete available captcha tasks accurately and earn rewards for
          eligible submissions.
        </p>

        <BannerButton to="/captcha">Start Task</BannerButton>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        <div className={styles.taskCard}>
          {/* Card header */}
          <div className={styles.cardHeader}>
            <div className={styles.securityIcon}>
              <ShieldCheck size={24} />
            </div>

            <div>
              <span>VERIFICATION TASK</span>
              <strong>Captcha Check</strong>
            </div>
          </div>

          {/* Captcha */}
          <div className={styles.captchaBox}>
            <div className={styles.captchaCode}>{correctCaptcha}</div>

            <span>Enter the code shown above</span>
          </div>

          {/* Input */}
          <div className={styles.inputGroup}>
            <input
              ref={captchaInputRef}
              type="text"
              value={captcha}
              onChange={handleInputChange}
              placeholder="Enter captcha"
              maxLength={4}
              aria-label="Enter captcha"
            />

            <button
              type="button"
              onClick={handleVerify}
              className={styles.verifyButton}
            >
              {verified ? (
                <>
                  <Check size={17} />
                  Verified
                </>
              ) : (
                "Verify"
              )}
            </button>
          </div>

          {/* Status */}
          <div
            className={`${styles.status} ${
              verified ? styles.success : error ? styles.failed : ""
            }`}
            aria-live="polite"
            role="status"
          >
            {verified ? (
              <>
                <Check size={15} />
                Captcha verified — reward unlocked
              </>
            ) : error ? (
              <>Verification failed — try again</>
            ) : (
              <>
                <ShieldCheck size={15} />
                Verification required
              </>
            )}
          </div>
        </div>

        {/* Reward visual */}
        <div
          className={`${styles.reward} ${verified ? styles.rewardActive : ""}`}
        >
          <img src={singleGem} alt="Reward gem" />

          <div className={styles.rewardText}>
            <Sparkles size={14} />
            <span>Reward</span>
          </div>
        </div>
      </div>
    </RewardBannerShell>
  );
}
