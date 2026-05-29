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
      background: "#292929",
      color: "white",
      padding: "40px 40px 25px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "28px",
      maxWidth: "700px",
      margin: "0 auto 10px",
    },
    brand: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
    },
    brandName: {
      fontFamily: "Quattrocento, serif",
      fontSize: "25px",
      fontWeight: "800",
      lineHeight: "1.2",
      color: "white",
    },
    brandInfo: {
      fontSize: "13px",
      color: "#5F5F5F",
      margin: 0,
      lineHeight: "1",
    },
    colTitle: {
      fontFamily: "Quattrocento, serif",
      fontSize: "15px",
      fontWeight: "800",
      color: "white",
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
      fontSize: "12px",
      color: "#5F5F5F",
      cursor: "pointer",
    },
    igGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "5px",
    },
    igItem: {
      aspectRatio: "1 / 1",
      borderRadius: "5px",
      background: "#5F5F5F",
    },
    bottom: {
      borderTop: "#5F5F5F",
      paddingTop: "10px",
      textAlign: "center",
      fontSize: "10px",
      color: "#5F5F5F",
      maxWidth: "800px",
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