const malzemelerListesi = [
    "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
    "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak",
    "Soğan", "Sarımsak",
  ];
  
  const styles = {
    group: {
      marginBottom: "28px",
    },
    labelRow: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "6px",
    },
    label: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "14px",
      fontWeight: "700",
      color: "#1a1a1a",
      letterSpacing: "0.3px",
    },
    counter: (count) => ({
      fontSize: "12px",
      fontWeight: "600",
      color: count >= 10 ? "#c0392b" : "#999",
      background: count >= 10 ? "#fff0ee" : "#f5f5f5",
      padding: "2px 8px",
      borderRadius: "20px",
      transition: "all 0.2s",
    }),
    hint: {
      fontSize: "12px",
      color: "#999",
      marginBottom: "12px",
      marginTop: "2px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "8px",
    },
    checkLabel: (secili, disabled) => ({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "9px 12px",
      borderRadius: "10px",
      border: secili ? "2px solid #c0392b" : "2px solid #e8e0db",
      background: secili ? "#fff0ee" : disabled ? "#f9f9f9" : "#fafafa",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "all 0.15s ease",
      fontSize: "13px",
      color: secili ? "#c0392b" : "#444",
      fontWeight: secili ? "600" : "400",
    }),
    checkbox: {
      width: "16px",
      height: "16px",
      accentColor: "#c0392b",
      cursor: "inherit",
      flexShrink: 0,
    },
    errorMsg: {
      display: "inline-block",
      marginTop: "10px",
      fontSize: "12px",
      color: "#c0392b",
      background: "#fff0ee",
      padding: "4px 10px",
      borderRadius: "6px",
      fontWeight: "500",
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