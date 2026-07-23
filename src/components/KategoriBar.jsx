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
    flexWrap: "wrap", // Ekran daraldığında alt alta kaymasını sağlar
    gap: "16px", // Kategoriler arası modern boşluk
    padding: "30px 20px",
    background: "#FAF7F2", // Sayfa genel arka planına uyumlu hale getirildi
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    borderRadius: "30px", // Daha oval ve modern hap tasarım
    fontSize: "16px",
    fontWeight: "600",
    color: "#292929",
    cursor: "pointer",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // Hafif bir derinlik gölgesi
    transition: "all 0.2s ease-in-out",
    border: "1px solid #eae5de",
    userSelect: "none",
  },
};

export default function KategoriBar() {
  return (
    <div style={styles.bar}>
      {kategoriler.map((item) => (
        <span 
          key={item} 
          style={styles.item}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#CE2829";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.borderColor = "#CE2829";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "#292929";
            e.currentTarget.style.borderColor = "#eae5de";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}