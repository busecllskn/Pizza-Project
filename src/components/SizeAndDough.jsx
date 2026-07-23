const styles = {
  row: {
    display: "flex",
    gap: "40px",
    marginBottom: "40px",
    flexWrap: "wrap",
    width: "100%",
  },
  group: {
    flex: 1,
    minWidth: "250px",
  },
  label: {
    display: "block",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "16px",
    fontWeight: "600", // Font kalınlığı bir tık daha ince yapıldı
    color: "#292929",
    marginBottom: "15px",
    letterSpacing: "0.5px",
  },
  zorunlu: {
    color: "#CE2829",
    marginLeft: "3px",
  },
  radioGroup: {
    display: "flex",
    gap: "15px",
  },
  radioLabel: (active) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: active ? "2px solid #CE2829" : "2px solid #eae5de",
    background: active ? "#CE2829" : "#FAF7F2",
    color: active ? "white" : "#292929",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    transition: "all 0.2s ease-in-out",
    boxShadow: active ? "0 4px 12px rgba(206, 40, 41, 0.25)" : "none",
  }),
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
  },
  select: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "10px",
    border: "2px solid #eae5de",
    background: "#FAF7F2",
    fontSize: "15px",
    fontWeight: "600",
    color: "#292929",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 12 8'%3E%3Cpath fill='%235f5f5f' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20px center",
    appearance: "none",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  },
};

export default function SizeAndDough({ formData, handleChange }) {
  return (
    <div style={styles.row}>
      {/* Pizza boyutu s-m-l */}
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

      {/* Hamur kalınlığı */}
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
          <option value="">--- Hamur Kalınlığı Seç ---</option>
          <option value="İnce">İnce</option>
          <option value="Normal">Normal</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>
    </div>
  );
}