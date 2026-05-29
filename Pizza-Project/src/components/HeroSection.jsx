import { Link } from "react-router-dom";
import homeImg from "../assets/Home.png";

const styles = {
  hero: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
  btn: {
    marginTop: "8px",
    padding: "15px 35px",
    borderRadius: "40px",
    border: "none",
    background: "#FDC913",
    color: "#292929",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "0.8px",
    cursor: "pointer",
    fontFamily: "Barlow, sans-serif",
  },
};

export default function HeroSection() {
  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${homeImg})` }}>
      <div style={styles.content}>
        <Link to="/order">
          <button style={styles.btn}>ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
}