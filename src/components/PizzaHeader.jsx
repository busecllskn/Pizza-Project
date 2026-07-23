const styles = {
  header: {
    background: "#CE2829",
    padding: "30px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
  },
  logo: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "32px",
    fontWeight: "800",
    color: "#FAF7F2",
    margin: 0,
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
  },
};

export default function PizzaHeader() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Teknolojik Yemekler</h1>
    </header>
  );
}