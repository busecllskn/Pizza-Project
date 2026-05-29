const kategoriler = [
    "🍜 YENİ! Kore",
    "🍕 Pizza",
    "🍔 Burger",
    "🍟 Kızartmalar",
    "🌮 Fast food",
    "🥤 Gazlı İçecek",
  ];
   
  const styles = {
    bar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    },
    item: {
      padding: "20px 40px",
      borderRadius: "24px",
      fontSize: "18px",
      fontWeight: "600",
      color: "#292929",
      cursor: "pointer",
      background: "white",
    },
  };
   
  export default function KategoriBar() {
    return (
      <div style={styles.bar}>
        {kategoriler.map((item) => (
          <span key={item} style={styles.item}>{item}</span>
        ))}
      </div>
    );
  }