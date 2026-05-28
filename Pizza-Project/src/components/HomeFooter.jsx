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
      background: "#111",
      color: "#fff",
      padding: "56px 40px 24px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "48px",
      maxWidth: "900px",
      margin: "0 auto 40px",
    },
    brand: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },
    brandName: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "24px",
      fontWeight: "800",
      lineHeight: "1.2",
      margin: 0,
      color: "#fff",
    },
    brandInfo: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.55)",
      margin: 0,
      lineHeight: "1.6",
    },
    colTitle: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "15px",
      fontWeight: "700",
      color: "#fff",
      marginBottom: "16px",
      letterSpacing: "0.3px",
    },
    menuList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    menuItem: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.55)",
      cursor: "pointer",
      transition: "color 0.15s",
    },
    igGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
    },
    igItem: {
      aspectRatio: "1 / 1",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%)",
    },
    bottom: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      paddingTop: "20px",
      textAlign: "center",
      fontSize: "12px",
      color: "rgba(255,255,255,0.3)",
      maxWidth: "900px",
      margin: "0 auto",
    },
  };
  
  export default function HomeFooter() {
    return (
      <footer style={styles.footer}>
        <div style={styles.grid}>
          {/* Marka */}
          <div style={styles.brand}>
            <h3 style={styles.brandName}>Teknolojik<br />Yemekler</h3>
            <p style={styles.brandInfo}>📍 341 Londonderry Road,<br />İstanbul Türkiye</p>
            <p style={styles.brandInfo}>✉️ aciktim@teknolojikyemekler.com</p>
            <p style={styles.brandInfo}>📞 +90 216 123 45 67</p>
          </div>
  
          {/* Menüler */}
          <div>
            <h4 style={styles.colTitle}>Sıcacık Menuler</h4>
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={styles.igItem} />
              ))}
            </div>
          </div>
        </div>
  
        <p style={styles.bottom}>© 2023 Teknolojik Yemekler.</p>
      </footer>
    );
  }