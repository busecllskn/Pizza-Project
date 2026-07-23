import { useState } from "react";
import food1 from "../assets/food-1.png";
import food2 from "../assets/food-2.png";
import food3 from "../assets/food-3.png";

const tabs = [
  "🍜 Ramen",
  "🍕 Pizza",
  "🍔 Burger",
  "🍟 French fries",
  "🌮 Fast food",
  "🥤 Soft drinks",
];

const urunler = [
  {
    ad: "Terminal Pizza",
    puan: "4.9",
    yorum: "(200)",
    fiyat: "60₺",
    resim: food1,
  },
  {
    ad: "Position Absolute Acı Pizza",
    puan: "4.9",
    yorum: "(928)",
    fiyat: "85₺",
    resim: food2,
  },
  {
    ad: "useEffect Tavuklu Burger",
    puan: "4.9",
    yorum: "(462)",
    fiyat: "75₺",
    resim: food3,
  },
];

const styles = {
  section: {
    padding: "70px 20px",
    background: "#FAF7F2",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "'Caveat', cursive, serif",
    fontSize: "32px", // Yazı boyutu bir tık daha büyütüldü
    fontStyle: "italic",
    color: "#CE2829",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  title: {
    fontFamily: "Barlow, sans-serif",
    fontSize: "38px",
    fontWeight: "700",
    color: "#292929",
    marginBottom: "40px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
  tabsWrap: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "50px",
    maxWidth: "1000px",
    margin: "0 auto 50px",
  },
  tab: (active) => ({
    padding: "14px 26px",
    borderRadius: "30px",
    border: active ? "2px solid #292929" : "2px solid #eae5de",
    background: active ? "#292929" : "white",
    color: active ? "white" : "#292929",
    fontSize: "15px",
    fontWeight: active ? "700" : "600",
    cursor: "pointer",
    fontFamily: "Barlow, sans-serif",
    boxShadow: active ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: "all 0.2s ease-in-out",
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    textAlign: "left",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    transition: "transform 0.2s ease",
    display: "flex",
    flexDirection: "column",
  },
  imgContainer: {
    width: "100%",
    aspectRatio: "4 / 3",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  imgPlaceholder: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  info: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#292929",
    marginBottom: "20px",
    lineHeight: "1.3",
    fontFamily: "Barlow, sans-serif",
  },
  fiyatRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#5f5f5f",
    marginTop: "auto",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "600",
  },
  star: {
    color: "#FDC913",
  },
  fiyat: {
    fontWeight: "800",
    color: "#292929",
    fontSize: "18px",
    fontFamily: "Barlow, sans-serif",
  },
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section style={styles.section}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Caveat:wght@600&display=swap');
        `}
      </style>

      <p style={styles.subtitle}>en çok paketlenen menüler</p>
      <h2 style={styles.title}>Acıktıran Kodlara Doyuran Lezzetler</h2>

      <div style={styles.tabsWrap}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            style={styles.tab(activeTab === i)}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {urunler.map((urun) => (
          <div key={urun.ad} style={styles.card}>
            <div style={styles.imgContainer}>
              <img src={urun.resim} alt={urun.ad} style={styles.imgPlaceholder} />
            </div>
            <div style={styles.info}>
              <p style={styles.name}>{urun.ad}</p>
              <div style={styles.fiyatRow}>
                <div style={styles.ratingContainer}>
                  <span style={styles.star}>★</span>
                  <span style={{ color: "#292929", fontWeight: "700" }}>{urun.puan}</span>
                  <span>{urun.yorum}</span>
                </div>
                <span style={styles.fiyat}>{urun.fiyat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}