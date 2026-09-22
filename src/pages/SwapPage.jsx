export default function SwapPage() {
  return (
    <main style={styles.page}>
      <span style={styles.label}>SWAP CENTER</span>

      <h1>
        Swap Your <span>Rewards</span>
      </h1>

      <p>
        Convert eligible reward balances between supported VELOOP currencies.
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
  button: {
    marginTop: "25px",
    padding: "14px 22px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
};