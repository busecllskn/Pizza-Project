const styles = {
    wrap: {
      marginTop: "8px",
    },
    divider: {
      border: "none",
      borderTop: "1px solid #f0e8e4",
      margin: "24px 0",
    },
    altRow: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "24px",
      flexWrap: "wrap",
    },
    adetWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    adetLabel: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#999",
      textTransform: "uppercase",
      letterSpacing: "0.8px",
    },
    adetKontrol: {
      display: "flex",
      alignItems: "center",
      gap: "0",
      border: "2px solid #e8e0db",
      borderRadius: "12px",
      overflow: "hidden",
      width: "fit-content",
    },
    adetBtn: (disabled) => ({
      width: "42px",
      height: "42px",
      background: disabled ? "#f5f5f5" : "#fff",
      border: "none",
      fontSize: "20px",
      fontWeight: "300",
      color: disabled ? "#ccc" : "#c0392b",
      cursor: disabled ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.15s",
      lineHeight: 1,
    }),
    adetSayi: {
      width: "44px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "700",
      color: "#1a1a1a",
      borderLeft: "1px solid #e8e0db",
      borderRight: "1px solid #e8e0db",
      lineHeight: "42px",
    },
    ozet: {
      background: "linear-gradient(135deg, #fff8f7 0%, #fff 100%)",
      border: "1px solid #f0e0dc",
      borderRadius: "16px",
      padding: "20px 24px",
      minWidth: "220px",
      flex: 1,
      maxWidth: "340px",
      boxShadow: "0 4px 16px rgba(192,57,43,0.07)",
    },
    ozetBaslik: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "15px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "14px",
      paddingBottom: "10px",
      borderBottom: "1px solid #f0e0dc",
    },
    ozetRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "13px",
      color: "#666",
      marginBottom: "8px",
    },
    ozetToplam: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "12px",
      paddingTop: "12px",
      borderTop: "1px solid #f0e0dc",
      fontWeight: "700",
      fontSize: "15px",
      color: "#1a1a1a",
    },
    toplamFiyat: {
      color: "#c0392b",
      fontSize: "20px",
      fontFamily: "'Playfair Display', Georgia, serif",
    },
    submitBtn: (disabled) => ({
      width: "100%",
      marginTop: "16px",
      padding: "14px",
      borderRadius: "12px",
      border: "none",
      background: disabled
        ? "#e0d4d0"
        : "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",
      color: disabled ? "#aaa" : "#fff",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      boxShadow: disabled ? "none" : "0 4px 14px rgba(192,57,43,0.35)",
      fontFamily: "inherit",
    }),
    hataKutusu: {
      background: "#fff0ee",
      border: "1px solid #f5c6c2",
      borderRadius: "10px",
      padding: "10px 14px",
      color: "#c0392b",
      fontSize: "13px",
      marginTop: "12px",
      fontWeight: "500",
    },
  };
  
  export default function OrderSummary({
    adet,
    onArtir,
    onAzalt,
    malzemeSayisi,
    toplamFiyat,
    secimFiyat,
    isValid,
    loading,
    hata,
  }) {
    return (
      <div style={styles.wrap}>
        <hr style={styles.divider} />
  
        {hata && <div style={styles.hataKutusu}>{hata}</div>}
  
        <div style={styles.altRow}>
          {/* Adet */}
          <div style={styles.adetWrap}>
            <span style={styles.adetLabel}>Adet</span>
            <div style={styles.adetKontrol}>
              <button
                type="button"
                style={styles.adetBtn(adet <= 1)}
                onClick={onAzalt}
                disabled={adet <= 1}
              >
                −
              </button>
              <span style={styles.adetSayi}>{adet}</span>
              <button
                type="button"
                style={styles.adetBtn(false)}
                onClick={onArtir}
              >
                +
              </button>
            </div>
          </div>
  
          {/* Özet kutusu */}
          <div style={styles.ozet}>
            <p style={styles.ozetBaslik}>Sipariş Toplamı</p>
            <div style={styles.ozetRow}>
              <span>Baz fiyat ({adet} adet)</span>
              <span>{(85.5 * adet).toFixed(2)}₺</span>
            </div>
            {malzemeSayisi > 0 && (
              <div style={styles.ozetRow}>
                <span>Ek malzeme ({malzemeSayisi} × {adet})</span>
                <span>{secimFiyat.toFixed(2)}₺</span>
              </div>
            )}
            <div style={styles.ozetToplam}>
              <span>Toplam</span>
              <span style={styles.toplamFiyat}>{toplamFiyat.toFixed(2)}₺</span>
            </div>
  
            <button
              type="submit"
              style={styles.submitBtn(!isValid || loading)}
              disabled={!isValid || loading}
            >
              {loading ? "Gönderiliyor..." : "Sipariş Ver"}
            </button>
          </div>
        </div>
      </div>
    );
  }