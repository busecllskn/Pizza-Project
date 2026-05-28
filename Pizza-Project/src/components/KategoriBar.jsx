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
      gap: "8px",
      padding: "16px 24px",
      background: "#fff",
      borderBottom: "1px solid #f0ebe7",
      flexWrap: "wrap",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    },
    item: {
      padding: "8px 18px",
      borderRadius: "24px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#444",
      cursor: "pointer",
      transition: "all 0.15s",
      background: "#faf7f5",
      border: "1px solid #ede8e4",
      whiteSpace: "nowrap",
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