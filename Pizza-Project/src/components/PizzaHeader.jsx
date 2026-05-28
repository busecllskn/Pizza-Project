const styles = {
    header: {
      background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",
      padding: "18px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      boxShadow: "0 4px 20px rgba(192,57,43,0.35)",
    },
    logo: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "28px",
      fontWeight: "700",
      color: "#fff",
      letterSpacing: "1px",
      margin: 0,
      textShadow: "0 2px 8px rgba(0,0,0,0.18)",
    },
    breadcrumb: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "12px",
      color: "rgba(255,255,255,0.75)",
    },
    link: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      transition: "color 0.2s",
    },
    sep: {
      opacity: 0.5,
    },
    active: {
      color: "#fff",
      fontWeight: "600",
    },
  };
  
  export default function PizzaHeader() {
    return (
      <header style={styles.header}>
        <h1 style={styles.logo}>Teknolojik Yemekler</h1>
        <nav style={styles.breadcrumb}>
          <a href="/" style={styles.link}>Anasayfa</a>
          <span style={styles.sep}>›</span>
          <span>Seçenekler</span>
          <span style={styles.sep}>›</span>
          <strong style={styles.active}>Sipariş Oluştur</strong>
        </nav>
      </header>
    );
  }