import { Link } from "react-router-dom";
import homeImg from "../assets/Home.png";

const styles = {
  hero: {
    width: "100%",
    minHeight: "480px",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "40px",
    gap: "12px",
    textAlign: "center",
  },
  logoText: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "1px",
    margin: 0,
  },
  subtitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "14px",
    fontStyle: "italic",
    color: "#f9c74f",
    margin: 0,
    letterSpacing: "0.5px",
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "48px",
    fontWeight: "900",
    color: "#fff",
    lineHeight: "1.1",
    margin: "4px 0",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 2px 12px rgba(0,0,0,0.2)",
  },
  btn: {
    marginTop: "8px",
    padding: "14px 40px",
    borderRadius: "40px",
    border: "none",
    background: "#f9c74f",
    color: "#1a1a1a",
    fontWeight: "800",
    fontSize: "14px",
    letterSpacing: "2px",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(249,199,79,0.45)",
    transition: "transform 0.15s, box-shadow 0.15s",
    fontFamily: "inherit",
  },
};

export default function HeroSection() {
  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${homeImg})` }}>
      <div style={styles.content}>
        <h1 style={styles.logoText}>Teknolojik Yemekler</h1>
        <p style={styles.subtitle}>fırsatı kaçırma</p>
        <h2 style={styles.title}>
          Kod Acıktırır<br />Pizza, Doyurur
        </h2>
        <Link to="/order">
          <button style={styles.btn}>ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
}