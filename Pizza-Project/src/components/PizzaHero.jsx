const styles = {
    wrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "32px",
      paddingBottom: "8px",
    },
    imageContainer: {
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0 12px 40px rgba(192,57,43,0.22), 0 4px 12px rgba(0,0,0,0.12)",
      border: "5px solid #fff",
      marginBottom: "24px",
      background: "#f5ede6",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    title: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "26px",
      fontWeight: "700",
      color: "#1a1a1a",
      margin: "0 0 10px 0",
      textAlign: "center",
      letterSpacing: "0.3px",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "16px",
    },
    fiyat: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "24px",
      fontWeight: "700",
      color: "#c0392b",
    },
    badge: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      background: "#fff8e1",
      border: "1px solid #f9c74f",
      borderRadius: "20px",
      padding: "3px 10px",
      fontSize: "13px",
      fontWeight: "600",
      color: "#b8860b",
    },
    goruntuleme: {
      fontSize: "13px",
      color: "#999",
    },
    aciklama: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.7",
      textAlign: "center",
      maxWidth: "520px",
      margin: "0 auto 8px",
    },
    divider: {
      width: "48px",
      height: "3px",
      background: "linear-gradient(90deg, #c0392b, #e74c3c)",
      borderRadius: "2px",
      border: "none",
      margin: "16px auto",
    },
  };
  
  export default function PizzaHero() {
    return (
      <div style={styles.wrap}>
        <div style={styles.imageContainer}>
          <img
            src="/images/pizza.png"
            alt="Position Absolute Acı Pizza"
            style={styles.image}
          />
        </div>
        <h2 style={styles.title}>Position Absolute Acı Pizza</h2>
        <div style={styles.meta}>
          <span style={styles.fiyat}>85.50₺</span>
          <span style={styles.badge}>★ 4.9</span>
          <span style={styles.goruntuleme}>(200)</span>
        </div>
        <p style={styles.aciklama}>
          Frontend Dev olarak hala <em>position:absolute</em> kullanıyorsan bu çok acı pizza tam sana göre.
          Domates, peynir ve çeşitli malzemelerle kaplanmış, odun ateşinde yüksek sıcaklıkta pişirilen
          lezzetli bir İtalyan klasiği.
        </p>
        <hr style={styles.divider} />
      </div>
    );
  }