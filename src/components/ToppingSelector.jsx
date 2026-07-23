const malzemelerListesi = [
  "Pepperoni", 
  "Domates", 
  "Biber", 
  "Sosis", 
  "Mısır", 
  "Sucuk",
  "Kanada Jambonu", 
  "Ananas", 
  "Tavuk Izgara", 
  "Jalepeno", 
  "Kabak",
  "Soğan", 
  "Sarımsak",
];

const styles = {
  group: {
    marginBottom: "15px",
  },
  labelRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  label: {
    fontFamily: "'Barlow', serif",
    fontSize: "16px",
    fontWeight: "900",
    color: "#292929",
    letterSpacing: "0.5px",
  },
  counter: (count) => ({
    fontSize: "13px",
    fontWeight: "500",
    color: count >= 10 ? "#CE2829" : "#5F5F5F",
    padding: "10px",
  }),
  hint: {
    fontSize: "13px",
    color: "#5F5F5F",
    marginTop: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  checkLabel: (secili, disabled) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 15px",
    borderRadius: "10px",
    border: secili ? "2px solid #e6b400" : "2px solid #e8e3dc", // Çok hafif belirgin kenarlık
    background: secili ? "#FDC913" : disabled ? "#f0ece4" : "#FAF7F2",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "13px",
    fontWeight: secili ? "600" : "400",
    color: disabled ? "#999999" : "#292929",
  }),
  checkbox: {
    width: "18px",
    height: "18px",
    accentColor: "#CE2829",
    cursor: "inherit",
  },
  errorMsg: {
    display: "inline-block",
    marginTop: "10px",
    fontSize: "12px",
    color: "#CE2829",
    background: "#FAF7F2",
    padding: "5px 10px",
    borderRadius: "60px",
    fontWeight: "400",
  },
};

export default function ToppingSelector({ malzemeler, handleChange }) {
  return (
    <div style={styles.group}>
      <div style={styles.labelRow}>
        <label style={styles.label}>Ek Malzemeler</label>
        <span style={styles.counter(malzemeler.length)}>
          {malzemeler.length} / 10
        </span>
      </div>
      <p style={styles.hint}>En az 4, en fazla 10 malzeme seçebilirsiniz. (+5₺ / malzeme)</p>

      <div style={styles.grid}>
        {malzemelerListesi.map((malzeme) => {
          const secili = malzemeler.includes(malzeme);
          const disabled = !secili && malzemeler.length >= 10;
          return (
            <label key={malzeme} style={styles.checkLabel(secili, disabled)}>
              <input
                type="checkbox"
                value={malzeme}
                onChange={handleChange}
                checked={secili}
                disabled={disabled}
                style={styles.checkbox}
              />
              {malzeme}
            </label>
          );
        })}
      </div>

      {malzemeler.length < 4 && (
        <span style={styles.errorMsg}>
          En az 4 malzeme seçmelisiniz. ({malzemeler.length}/4)
        </span>
      )}
    </div>
  );
}