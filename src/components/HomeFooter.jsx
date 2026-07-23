import li0 from "../assets/li-0.png";
import li1 from "../assets/li-1.png";
import li3 from "../assets/li-3.png";
import li4 from "../assets/li-4.png";

const igImages = [li0, li1, li3, li4];

const menuler = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

const styles = {
  footer: {
    background: "#1a1a1a", // Footer arka planı biraz daha derinleştirildi
    color: "white",
    padding: "60px 20px 30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr", // Sütun oranları içeriğe göre dengelendi
    gap: "40px",
    maxWidth: "1100px",
    margin: "0 auto 40px",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  brandName: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "1.2",
    color: "white",
    textTransform: "uppercase",
  },
  brandInfo: {
    fontSize: "14px",
    color: "#b0b0b0", // Okunabilirlik için renk tonu açıldı
    margin: 0,
    lineHeight: "1.5",
  },
  colTitle: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "white",
    marginBottom: "20px",
    letterSpacing: "0.5px",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  menuItem: {
    fontSize: "14px",
    color: "#b0b0b0",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  igGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    maxWidth: "200px",
  },
  igItem: {
    aspectRatio: "1 / 1",
    borderRadius: "6px",
    width: "100%",
    objectFit: "cover",
  },
  bottom: {
    borderTop: "1px solid #333333", // Eksik olan çizgi tipi ve rengi düzeltildi
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "#888888",
    maxWidth: "1100px",
    margin: "0 auto",
  },
};

export default function HomeFooter() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        {/* Marka Bilgileri */}
        <div style={styles.brand}>
          <h3 style={styles.brandName}>Teknolojik<br />Yemekler</h3>
          <p style={styles.brandInfo}>📍 341 Londonderry Road,<br />İstanbul Türkiye</p>
          <p style={styles.brandInfo}>✉️ aciktim@teknolojikyemekler.com</p>
          <p style={styles.brandInfo}>📞 +90 216 123 45 67</p>
        </div>

        {/* Menüler */}
        <div>
          <h4 style={styles.colTitle}>Sıcacık Menüler</h4>
          <ul style={styles.menuList}>
            {menuler.map((m) => (
              <li key={m} style={styles.menuItem}>{m}</li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h4 style={styles.colTitle}>Instagram</h4>
          <div style={styles.igGrid}>
            {igImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Instagram ${i}`}
                style={styles.igItem}
              />
            ))}
          </div>
        </div>
      </div>

      <p style={styles.bottom}>© 2026 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
    </footer>
  );
}