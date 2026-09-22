export default function ReferPage() {
  return (
    <main style={styles.page}>
      <span style={styles.label}>REFER & EARN</span>

      <h1>
        Invite Friends. <span>Earn Rewards.</span>
      </h1>

      <p>
        Invite your friends to VELOOP Rewards and earn rewards when eligible
        referral activities are completed.
      </p>

      <button onClick={() => window.history.back()} style={styles.button}>
        ← Back to Rewards
      </button>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 8%",
    background: "#161827",
    color: "#fff",
  },
  label: {
    color: "#6fb8ff",
    fontWeight: 800,
    letterSpacing: "0.1em",
  },
  h1: {
    fontSize: "clamp(2.5rem, 5vw, 5rem)",
  },
  button: {
    marginTop: "25px",
    padding: "14px 22px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
};