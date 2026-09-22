import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <header className={styles.header}>
        <span className={styles.eyebrow}>VELOOP REWARDS</span>

        <h1>
          Explore Rewards <span>&amp; Opportunities</span>
        </h1>

        <p>
          Discover ways to earn, swap and redeem your VE rewards.
        </p>
      </header>

      <section
        className={styles.bannerList}
        aria-label="VELOOP reward opportunities"
      >
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
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