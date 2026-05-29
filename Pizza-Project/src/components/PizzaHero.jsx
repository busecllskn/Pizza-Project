const styles = {
    wrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "0",
    },
    imageContainer: {
      width: "660px",
      height: "330px",
      borderRadius: "100%",
      marginBottom: "24px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    title: {
      display: "flex",
      fontFamily: "'Roboto Condensed', serif",
      fontSize: "25px",
      fontWeight: "600",
      color: "#292929",
      textAlign: "left",
      alignItems: "flex-start",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      gap: "120px",
      marginBottom: "30px",
    },
    fiyat: {
      fontFamily: "'Roboto Condensed', serif",
      fontSize: "25px",
      fontWeight: "800",
      color: "#292929",
    },
    breadcrumb: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      fontSize: "13px",
      color: "#5F5F5F",
    },
    link: {
      color: "#5F5F5F",
      textDecoration: "none",
    },
    active: {
      color: "#CE2829",
      fontWeight: "500",
    },
    goruntuleme: {
      fontSize: "13px",
      color: "#292929",
    },
    aciklama: {
      fontSize: "12px",
      color: "#666",
      lineHeight: "2",
      textAlign: "center",
      maxWidth: "600px",
      margin: "auto",
    },
  };
  
  export default function PizzaHero() {
    return (
      <div style={styles.wrap}>
        <div style={styles.imageContainer}>
          <img
            src="/src/assets/form-banner.png"
            alt="Position Absolute Acı Pizza"
            style={styles.image}
          />
           <nav style={styles.breadcrumb}>
          <a href="/" style={styles.link}>Anasayfa</a>
          <span style={styles}>›</span>
          <span>Seçenekler</span>
          <span style={styles}>›</span>
          <strong style={styles.active}>Sipariş Oluştur</strong>
        </nav>
        </div>
        <h2 style={styles.title}>Position Absolute Acı Pizza</h2>
        <div style={styles.meta}>
          <span style={styles.fiyat}>85.50₺</span>
          <span style={styles}>4.9</span>
          <span style={styles.goruntuleme}>(200)</span>
        </div>
        <p style={styles.aciklama}>
          Frontend Dev olarak hala <em>position:absolute</em> kullanıyorsan bu çok acı pizza tam sana göre.
          Domates, peynir ve çeşitli malzemelerle kaplanmış, odun ateşinde yüksek sıcaklıkta pişirilen
          lezzetli bir İtalyan klasiği.
        </p>
        <hr style={styles} />
      </div>
    );
  }