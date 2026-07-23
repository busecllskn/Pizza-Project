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
    paddingTop: "80px", // İçerik biraz daha aşağıda konumlandırıldı
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
    fontSize: "48px",
    fontWeight: "400",
    fontFamily: "'Caveat', cursive",
    fontStyle: "normal",
    marginBottom: "15px",
    letterSpacing: "1.5px",
    textShadow: "0px 2px 6px rgba(0,0,0,0.3)",
  },
  mainHeadline: {
    color: "#FFFFFF",
    fontSize: "66px", // Yazı boyutu bir tık daha büyütüldü
    fontWeight: "700",
    lineHeight: "1.15",
    fontFamily: "'Barlow', sans-serif",
    maxWidth: "950px",
    marginBottom: "35px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    textShadow: "0px 2px 8px rgba(0,0,0,0.3)",
  },
  btn: {
    padding: "16px 38px",
    borderRadius: "30px",
    border: "none",
    background: "#FDC913",
    color: "#292929",
    fontWeight: "700",
    fontSize: "16px",
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