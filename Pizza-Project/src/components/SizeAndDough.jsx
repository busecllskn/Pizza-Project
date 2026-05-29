const styles = {
    row: {
      display: "flex",
      marginBottom: "50px",
      flexWrap: "wrap",
    },
    group: {
      flex: 1,
      minWidth: "160px",
    },
    label: {
      display: "block",
      fontFamily: "'Roboto Condensed', serif",
      fontSize: "16px",
      fontWeight: "500",
      color: "#292929",
      marginBottom: "20px",
      letterSpacing: "0.5px",
    },
    zorunlu: {
      color: "#CE2829",
      marginLeft: "3px",
    },
    radioGroup: {
      display: "flex",
      gap: "10px",
    },
    radioLabel: (active) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      borderRadius: "30px",
      border: active ? "2px solid #CE2829" : "2px solid #FAF7F2",
      background: active ? "#FAF7F2" : "#FAF7F2",
      color: active ? "#CE2829" : "#292929",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
    }),
    hiddenInput: {
      position: "absolute",
      opacity: 0,
    },
    select: {
      width: "100%",
      padding: "15px 30px",
      borderRadius: "10px",
      border: "2px solid #FAF7F2",
      background: "#FAF7F2",
      fontSize: "15px",
      color: "#292929",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      cursor: "pointer",
      fontFamily: "'Roboto Condensed', serif",
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