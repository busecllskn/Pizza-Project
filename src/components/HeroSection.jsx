import { Link } from "react-router-dom";
import homeImg from "../assets/home-banner.png";

const styles = {
  hero: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "50px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  brandTitle: {
    color: "#FFFFFF",
    fontSize: "36px", // Dikkat çekici ve büyük
    fontWeight: "400",
    fontFamily: "'Caveat', cursive", // Orijinal görseldeki o havalı, özel el yazısı stili
    fontStyle: "normal",
    marginBottom: "15px",
    letterSpacing: "1.5px",
    textShadow: "0px 2px 6px rgba(0,0,0,0.3)",
  },
  mainHeadline: {
    color: "#FFFFFF",
    fontSize: "46px",
    fontWeight: "700",
    lineHeight: "1.15",
    fontFamily: "'Barlow', sans-serif",
    maxWidth: "700px",
    marginBottom: "30px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    textShadow: "0px 2px 8px rgba(0,0,0,0.3)",
  },
  btn: {
    padding: "14px 32px",
    borderRadius: "30px",
    border: "none",
    background: "#FDC913",
    color: "#292929",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "1px",
    cursor: "pointer",
    fontFamily: "Barlow, sans-serif",
    textTransform: "uppercase",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
};

export default function HeroSection() {
  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${homeImg})` }}>
      {/* Google Fonts üzerinden şık el yazısı fontu (Caveat) eklendi */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Caveat:wght@600&display=swap');
        `}
      </style>

      <div style={styles.content}>
        <div style={styles.brandTitle}>Teknolojik Yemekler</div>

        <div style={styles.mainHeadline}>
          KOD ACIKTIRIR<br />
          PİZZA, DOYURUR
        </div>

        <Link to="/order">
          <button style={styles.btn}>ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
}