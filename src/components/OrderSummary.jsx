const styles = {
    wrap: {
      marginTop: "20px",
    },
    divider: {
      border: "none",
      borderTop: "1px solid #5F5F5F",
      margin: "30px",
    },
    altRow: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "30px",
      flexWrap: "wrap",
    },
    adetWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    adetLabel: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#5F5F5F",
    },
    adetKontrol: {
      display: "flex",
      alignItems: "center",
      gap: "0",
      border: "2px solid  #FAF7F2",
      width: "fit-content",
    },
    adetBtn: (disabled) => ({
      width: "40px",
      height: "40px",
      background: disabled ? " #FAF7F2" : " #FAF7F2",
      border: "none",
      fontSize: "20px",
      fontWeight: "300",
      color: disabled ? "#292929" : "#CE2829",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    adetSayi: {
      width: "40px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "700",
      color: "#292929",
      borderLeft: "1px solid #FAF7F2",
      borderRight: "1px solid #FAF7F2",
    },
    ozet: {
      background: "#FAF7F2",
      border: "1px solid #FAF7F2",
      borderRadius: "16px",
      padding: "20px 24px",
      minWidth: "200px",
      flex: 1,
      maxWidth: "350px",
     
    },
    ozetBaslik: {
      fontFamily: "'Barlow', serif",
      fontSize: "25px",
      fontWeight: "600",
      color: "#292929",
      marginBottom: "15px",
      paddingBottom: "10px",
      borderBottom: "1px solid #FAF7F2",
    },
    ozetRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "15px",
      color: "#5F5F5F",
      marginBottom: "1px",
    },
    ozetToplam: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
      paddingTop: "10px",
      borderTop: "1px solid #FAF7F2",
      fontWeight: "700",
      fontSize: "15px",
      color: "#CE2829",
    },
    toplamFiyat: {
      color: "#c0392b",
      fontSize: "20px",
      fontFamily: "'Barlow', serif",
    },
    submitBtn: (disabled) => ({
      width: "100%",
      marginTop: "15px",
      padding: "15px",
      border: "none",
      background: disabled
        ? "#FAF7F2"
        : "linear-gradient(#FDC913, #FDC913)",
      color: "#5F5F5F",
      fontSize: "20px",
      fontWeight: "700",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "'Barlow', serif",
    }),
    hataKutusu: {
      background: "#FDC913",
      border: "1px solid #FAF7F2",
      borderRadius: "10px",
      padding: "10px 14px",
      color: "#CE2829",
      fontSize: "13px",
      marginTop: "10px",
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
  
          {/* Sipariş toplamı kutusu */}
          <div style={styles.ozet}>
            <p style={styles.ozetBaslik}>Sipariş Toplamı</p>
            <div style={styles.ozetRow}>
              <span>Seçimler ({adet} adet)</span>
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
              {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
            </button>
          </div>
        </div>
      </div>
    );
  }