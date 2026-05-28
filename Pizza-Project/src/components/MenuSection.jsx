import { useState } from "react";

const tabs = [
  "🍜 Ramen", "🍕 Pizza", "🍔 Burger",
  "🍟 French fries", "🌮 Fast food", "🥤 Soft drinks",
];

const urunler = [
  { ad: "Terminal Pizza", puan: "4.9", yorum: "(200)", fiyat: "60₺" },
  { ad: "Position Absolute Acı Pizza", puan: "4.9", yorum: "(928)", fiyat: "85₺" },
  { ad: "useEffect Tavuklu Burger", puan: "4.9", yorum: "(462)", fiyat: "75₺" },
];

const styles = {
  section: {
    padding: "56px 40px",
    background: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "14px",
    fontStyle: "italic",
    color: "#c0392b",
    marginBottom: "8px",
    letterSpacing: "0.5px",
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "32px",
    letterSpacing: "0.3px",
  },
  tabsWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  tab: (active) => ({
    padding: "10px 20px",
    borderRadius: "30px",
    border: active ? "none" : "1px solid #e8e0db",
    background: active ? "#1a1a1a" : "#fafafa",
    color: active ? "#fff" : "#555",
    fontSize: "13px",
    fontWeight: active ? "700" : "500",
    cursor: "pointer",
    transition: "all 0.18s",
    fontFamily: "inherit",
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "18px",
    border: "1px solid #f0ebe7",
    overflow: "hidden",
    textAlign: "left",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    transition: "transform 0.18s, box-shadow 0.18s",
  },
  imgPlaceholder: {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "linear-gradient(135deg, #f5ede6 0%, #edddd4 100%)",
  },
  info: {
    padding: "14px 16px",
  },
  name: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "8px",
    lineHeight: "1.4",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#999",
  },
  fiyat: {
    marginLeft: "auto",
    fontWeight: "800",
    color: "#1a1a1a",
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
              <div style={styles.meta}>
                <span>⭐ {urun.puan}</span>
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