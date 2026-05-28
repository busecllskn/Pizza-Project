import { Link } from "react-router-dom";

const styles = {
  section: {
    padding: "48px 40px",
    background: "#f7f2ef",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  cardBase: {
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    minHeight: "220px",
    display: "flex",
    alignItems: "flex-end",
    padding: "28px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
  },
  cardRed: {
    background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",
    gridRow: "1 / span 2",
    minHeight: "460px",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardDark: {
    background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)",
  },
  cardYellow: {
    background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1,
  },
  h2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "34px",
    fontWeight: "800",
    color: "#fff",
    margin: 0,
    lineHeight: "1.1",
  },
  h3White: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
    lineHeight: "1.2",
  },
  h3Dark: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: 0,
    lineHeight: "1.2",
  },
  subtext: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    margin: 0,
  },
  btnWhite: {
    padding: "9px 20px",
    borderRadius: "24px",
    border: "2px solid rgba(255,255,255,0.7)",
    background: "transparent",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    cursor: "pointer",
    width: "fit-content",
    transition: "all 0.15s",
    fontFamily: "inherit",
  },
  btnDark: {
    padding: "9px 20px",
    borderRadius: "24px",
    border: "2px solid #1a1a1a",
    background: "transparent",
    color: "#1a1a1a",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    cursor: "pointer",
    width: "fit-content",
    transition: "all 0.15s",
    fontFamily: "inherit",
  },
  highlight: {
    color: "#c0392b",
    fontStyle: "italic",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
};

export default function FeaturedSection() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {/* Sol büyük kart */}
        <div style={{ ...styles.cardBase, ...styles.cardRed }}>
          <div style={styles.content}>
            <h2 style={styles.h2}>Özel<br />Lezzetus</h2>
            <p style={styles.subtext}>Position:Absolute Acı Burger</p>
            <Link to="/order">
              <button style={styles.btnWhite}>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>

        {/* Sağ kolon */}
        <div style={styles.right}>
          <div style={{ ...styles.cardBase, ...styles.cardDark }}>
            <div style={styles.content}>
              <h3 style={styles.h3White}>Hackathlon<br />Burger Menü</h3>
              <Link to="/order">
                <button style={styles.btnWhite}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>

          <div style={{ ...styles.cardBase, ...styles.cardYellow }}>
            <div style={styles.content}>
              <h3 style={styles.h3Dark}>
                <span style={styles.highlight}>Çoooook</span> hızlı<br />npm gibi kurye
              </h3>
              <Link to="/order">
                <button style={styles.btnDark}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}