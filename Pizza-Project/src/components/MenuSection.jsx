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
  { ad: "Terminal Pizza", 
    puan: "4.9", 
    yorum: "(200)", 
    fiyat: "60₺",
    resim: food1, 
  },
  { ad: "Position Absolute Acı Pizza", 
    puan: "4.9", 
    yorum: "(928)", 
    fiyat: "85₺", 
    resim: food2,
  },
  { ad: "useEffect Tavuklu Burger", 
    puan: "4.9", 
    yorum: "(462)", 
    fiyat: "75₺", 
    resim: food3,
  },
];

const styles = {
  section: {
    padding: "50px 10px",
    background: "#FAF7F2",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Satisfy, serif",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#CE2829",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  title: {
    fontFamily: "Barlow, serif",
    fontSize: "35px",
    fontWeight: "600",
    color: "#292929",
    marginBottom: "35px",
    letterSpacing: "0.5px",
  },
  tabsWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "50px",
  },
  tab: (active) => ({
    padding: "15px 30px",
    borderRadius: "20px",
    border: active ? "none" : " white",
    background: active ? "#292929" : "white",
    color: active ? "white" : "#292929",
    fontSize: "15px",
    fontWeight: active ? "700" : "600",
    cursor: "pointer",
    fontFamily: "Roboto, serif",
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 2fr)",
    gap: "25px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    borderRadius: "30px",
    textAlign: "left",
  },
  imgPlaceholder: {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "white",
  },
  info: {
    padding: "25px 15px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#292929",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  fiyat: {
    marginLeft: "auto",
    fontWeight: "700",
    color: "#292929",
    fontSize: "15px",
  },
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section style={styles.section}>
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
            <div style={styles.imgPlaceholder} />
            <div style={styles.info}>
              <p style={styles.name}>{urun.ad}</p>
              <div style={styles}>
                <span>{urun.puan}</span>
                <span>{urun.yorum}</span>
                <span style={styles.fiyat}>{urun.fiyat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}