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
    display: "flex",
    padding: "28px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
    overflow: "hidden",
    position: "relative",
  },
  cardRed: {
    background: "#CE2829",
    minHeight: "460px",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0",
  },
  // Sağdaki kartlar resimler tam sığsın diye bir tık büyütüldü
  cardDark: {
    background: "#292929",
    minHeight: "220px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardYellow: {
    background: "#FAF7F2",
    minHeight: "220px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
    zIndex: 2,
    maxWidth: "55%",
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
    width: "fit-content",
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
  imgRed: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "bottom right",
  },
  imgRight: {
    height: "100%",
    maxHeight: "180px",
    objectFit: "contain",
    flexShrink: 0,
    zIndex: 1,
  },
  cardRedBody: {
    padding: "24px 28px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 2,
    position: "relative",
  },
};

export default function FeaturedSection() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>

        {/* Büyük kırmızı kart */}
        <div style={{ ...styles.cardBase, ...styles.cardRed }}>
          <div style={{ position: "absolute", right: 0, bottom: 0, width: "60%", height: "70%", zIndex: 1 }}>
            <img src={food1} alt="Özel Lezzetus" style={styles.imgRed} />
          </div>
          <div style={styles.cardRedBody}>
            <h2 style={styles.h2}>Özel<br />Lezzetus</h2>
            <p style={styles.subtext}>Position: Absolute Acı Burger</p>
            <Link to="/order">
              <button style={styles.btnWhite}>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>

        {/* Diğer kartlar */}
        <div style={styles.rightCol}>
          <div style={{ ...styles.cardBase, ...styles.cardDark }}>
            <div style={styles.content}>
              <h3 style={styles.h3White}>Hackathlon<br />Burger Menü</h3>
              <Link to="/order">
                <button style={styles.btnWhite}>SİPARİŞ VER</button>
              </Link>
            </div>
            <img src={food2} alt="Hackathlon Burger" style={styles.imgRight} />
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
            <img src={food3} alt="Hızlı Kurye" style={styles.imgRight} />
          </div>
        </div>

      </div>
    </section>
  );
}