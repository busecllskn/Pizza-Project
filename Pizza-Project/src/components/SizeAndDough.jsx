const styles = {
    row: {
      display: "flex",
      gap: "32px",
      marginBottom: "28px",
      flexWrap: "wrap",
    },
    group: {
      flex: 1,
      minWidth: "160px",
    },
    label: {
      display: "block",
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "14px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "10px",
      letterSpacing: "0.3px",
    },
    zorunlu: {
      color: "#c0392b",
      marginLeft: "2px",
    },
    radioGroup: {
      display: "flex",
      gap: "10px",
    },
    radioLabel: (active) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "52px",
      height: "52px",
      borderRadius: "12px",
      border: active ? "2px solid #c0392b" : "2px solid #e8e0db",
      background: active ? "#fff0ee" : "#fafafa",
      color: active ? "#c0392b" : "#555",
      fontWeight: "700",
      fontSize: "15px",
      cursor: "pointer",
      transition: "all 0.18s ease",
      boxShadow: active ? "0 2px 10px rgba(192,57,43,0.15)" : "none",
    }),
    hiddenInput: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0,
    },
    select: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "12px",
      border: "2px solid #e8e0db",
      background: "#fafafa",
      fontSize: "14px",
      color: "#333",
      appearance: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
      cursor: "pointer",
      outline: "none",
      fontFamily: "inherit",
      transition: "border-color 0.18s",
    },
  };
  
  export default function SizeAndDough({ formData, handleChange }) {
    return (
      <div style={styles.row}>
        {/* Boyut */}
        <div style={styles.group}>
          <label style={styles.label}>
            Boyut Seç <span style={styles.zorunlu}>*</span>
          </label>
          <div style={styles.radioGroup}>
            {[
              { value: "Küçük", display: "S" },
              { value: "Orta", display: "M" },
              { value: "Büyük", display: "L" },
            ].map(({ value, display }) => (
              <label key={value} style={styles.radioLabel(formData.boyut === value)}>
                <input
                  type="radio"
                  name="boyut"
                  value={value}
                  onChange={handleChange}
                  checked={formData.boyut === value}
                  style={styles.hiddenInput}
                />
                {display}
              </label>
            ))}
          </div>
        </div>
  
        {/* Hamur */}
        <div style={styles.group}>
          <label style={styles.label}>
            Hamur Kalınlığı <span style={styles.zorunlu}>*</span>
          </label>
          <select
            name="hamur"
            value={formData.hamur}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">-- Seçiniz --</option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>
      </div>
    );
  }