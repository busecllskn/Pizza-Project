import { Link } from "react-router-dom";
import food1 from "../assets/kart-1.png";
import food2 from "../assets/kart-2.png";
import food3 from "../assets/kart-3.png";

const styles = {
  section: {
    padding: "80px 20px",
    background: "#FAF7F2",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  cardBase: {
    borderRadius: "15px",
    minHeight: "220px",
    display: "flex",
    padding: "28px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
  },
  cardRed: {
    background: "#CE2829",
    minHeight: "460px",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardDark: {
    background: "#292929",
  },
  cardYellow: {
    background: "#FAF7F2",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  h2: {
    fontFamily: "Barlow, serif",
    fontSize: "50px",
    fontWeight: "800",
    color: "white",
    margin: 0,
    lineHeight: "1.3",
  },
  h3White: {
    fontFamily: "Barlow, serif",
    fontSize: "25px",
    fontWeight: "700",
    color: "white",
    margin: 0,
    lineHeight: "1.3",
  },
  h3Dark: {
    fontFamily: "Barlow, serif",
    fontSize: "25px",
    fontWeight: "700",
    color: "#292929",
    margin: 0,
    lineHeight: "1.3",
  },
  subtext: {
    fontSize: "15px",
    color: "white",
    margin: 0,
  },
  btnWhite: {
    padding: "10px 25px",
    borderRadius: "20px",
    border: "2px solid white",
    background: "transparent",
    color: "#FAF7F2",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.2px",
    cursor: "pointer",
    fontFamily: "Barlow, serif",
  },
  btnDark: {
    padding: "9px 20px",
    borderRadius: "24px",
    border: "2px solid #1a1a1a",
    background: "transparent",
    color: "#292929",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    cursor: "pointer",
    width: "fit-content",
    transition: "all 0.15s",
    fontFamily: "Barlow, serif",
  },
  highlight: {
    color: "#CE2829",
    fontStyle: "italic",
  },
};

export default function FeaturedSection() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {/* Solda olan kırmızı kart */}
        <div style={{ ...styles.cardBase, ...styles.cardRed }}>
        <img src={food1} alt="Özel Lezzetus" style={{ width: "100%"}} />
          <div style={styles.content}>
            <h2 style={styles.h2}>Özel<br />Lezzetus</h2>
            <p style={styles.subtext}>Position: Absolute Acı Burger</p>
            <Link to="/order">
              <button style={styles.btnWhite}>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>

        {/* Sağda olan kartlar */}
        <div style={styles}>
          <div style={{ ...styles.cardBase, ...styles.cardDark }}>
          <img src={food2} alt="Hackathlon Burger" style={{ width: "100%"}} />
            <div style={styles.content}>
              <h3 style={styles.h3White}>Hackathlon<br />Burger Menü</h3>
              <Link to="/order">
                <button style={styles.btnWhite}>SİPARİŞ VER</button>
              </Link>
            </div>
          </div>

          <div style={{ ...styles.cardBase, ...styles.cardYellow }}>
          <img src={food3} alt="Hızlı Kurye" style={{ width: "100%"}} />
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