export default function CaptchaPage() {
  return (
    <main style={styles.page}>
      <span style={styles.label}>CAPTCHA TASKS</span>

      <h1>
        Complete Tasks. <span>Earn Rewards.</span>
      </h1>

      <p>
        Complete available captcha tasks accurately and receive rewards for
        eligible submissions.
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