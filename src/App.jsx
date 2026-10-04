import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ReferEarnBanner from "./components/ReferEarnBanner/ReferEarnBanner";
import SwapCenterBanner from "./components/SwapCenterBanner/SwapCenterBanner";
import BonusVEsBanner from "./components/BonusVEsBanner/BonusVEsBanner";
import CaptchaTasksBanner from "./components/CaptchaTasksBanner/CaptchaTasksBanner";
import ExchangeCenterBanner from "./components/ExchangeCenterBanner/ExchangeCenterBanner";

import ReferPage from "./pages/ReferPage";
import SwapPage from "./pages/SwapPage";
import BonusPage from "./pages/BonusPage";
import CaptchaPage from "./pages/CaptchaPage";
import ExchangePage from "./pages/ExchangePage";

import styles from "./App.module.css";

function HomePage() {
  return (
    <main className={styles.page}>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>V</span>
          <span>VELOOP</span>
        </Link>

        <div className={styles.navLinks}>
          <a href="#earn">Earn</a>
          <a href="#rewards">Rewards</a>
          <a href="#how-it-works">How it works</a>
        </div>

        <div className={styles.navActions}>
          <button className={styles.loginButton}>
            Log in
          </button>

          <button className={styles.navCta}>
            Get Started
          </button>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.statusDot} />
            VELOOP REWARDS
          </div>

          <h1 id="hero-title">
            Earn rewards.
            <br />
            <span>Make them count.</span>
          </h1>

          <p className={styles.heroDescription}>
            Complete rewarding activities, grow your VE balance,
            and turn your everyday actions into valuable rewards.
          </p>

          <div className={styles.heroActions}>
            <Link to="/bonus" className={styles.primaryButton}>
              <span>Start Earning</span>
              <span className={styles.buttonArrow}>→</span>
            </Link>

            <a href="#rewards" className={styles.secondaryButton}>
              Explore Rewards
            </a>
          </div>

          <div className={styles.trustRow}>
            <div>
              <strong>5+</strong>
              <span>Ways to earn</span>
            </div>

            <div>
              <strong>VE</strong>
              <span>Reward currency</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Opportunities</span>
            </div>
          </div>
        </div>

        {/* =========================
            HERO PRODUCT PREVIEW
        ========================= */}
        <div className={styles.heroPreview}>
          <div className={styles.previewGlow} />

          <div className={styles.balanceCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardLabel}>
                  TOTAL REWARDS
                </span>
                <strong>VE Balance</strong>
              </div>

              <span className={styles.cardIcon}>V</span>
            </div>

            <div className={styles.balanceAmount}>
              12,480 <span>VE</span>
            </div>

            <div className={styles.balanceMeta}>
              <span>+1,250 VE</span>
              <small>this month</small>
            </div>

            <div className={styles.progressTrack}>
              <span />
            </div>

            <div className={styles.progressInfo}>
              <span>Reward progress</span>
              <strong>78%</strong>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon}>✦</div>

            <div>
              <span>Today's opportunity</span>
              <strong>Complete a task</strong>
            </div>

            <span className={styles.miniReward}>
              +250 VE
            </span>
          </div>

          <div className={styles.floatingReward}>
            <span>REWARD UNLOCKED</span>
            <strong>+500 VE</strong>
          </div>

          <div className={styles.previewOrb}>
            <span>VE</span>
          </div>
        </div>
      </section>

      {/* =========================
          QUICK ACTIONS
      ========================= */}
      <section
        id="how-it-works"
        className={styles.quickActions}
      >
        <div className={styles.quickIntro}>
          <span>HOW IT WORKS</span>
          <h2>More ways to earn.</h2>
        </div>

        <Link to="/refer" className={styles.actionCard}>
          <span className={styles.actionNumber}>01</span>
          <div>
            <strong>Refer friends</strong>
            <p>Invite friends and unlock rewards.</p>
          </div>
          <span className={styles.actionArrow}>↗</span>
        </Link>

        <Link to="/bonus" className={styles.actionCard}>
          <span className={styles.actionNumber}>02</span>
          <div>
            <strong>Complete tasks</strong>
            <p>Stay active and earn bonus VE.</p>
          </div>
          <span className={styles.actionArrow}>↗</span>
        </Link>

        <Link to="/swap" className={styles.actionCard}>
          <span className={styles.actionNumber}>03</span>
          <div>
            <strong>Swap rewards</strong>
            <p>Move your rewards when eligible.</p>
          </div>
          <span className={styles.actionArrow}>↗</span>
        </Link>
      </section>

      {/* =========================
          REWARDS
      ========================= */}
      <section
        id="rewards"
        className={styles.rewardsSection}
      >
        <div className={styles.sectionHeading}>
          <div>
            <span>VELOOP REWARDS</span>
            <h2>Explore opportunities.</h2>
          </div>

          <p>
            Choose how you want to earn, grow and redeem
            your rewards.
          </p>
        </div>

        <div
          id="earn"
          className={styles.bannerList}
          aria-label="VELOOP reward opportunities"
        >
          <ReferEarnBanner />
          <SwapCenterBanner />
          <BonusVEsBanner />
          <CaptchaTasksBanner />
          <ExchangeCenterBanner />
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/swap" element={<SwapPage />} />
        <Route path="/bonus" element={<BonusPage />} />
        <Route path="/captcha" element={<CaptchaPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
}