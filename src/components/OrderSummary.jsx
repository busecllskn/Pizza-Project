const styles = {
  wrap: {
    marginTop: "20px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #dcd6cd",
    margin: "30px 0",
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
    fontSize: "14px",
    fontWeight: "700",
    color: "#292929",
    fontFamily: "'Barlow', sans-serif",
  },
  adetKontrol: {
    display: "flex",
    alignItems: "center",
    gap: "0",
    border: "1px solid #dcd6cd",
    borderRadius: "8px",
    overflow: "hidden",
    width: "fit-content",
    background: "white",
  },
  adetBtn: (disabled) => ({
    width: "42px",
    height: "42px",
    background: disabled ? "#f5f2ed" : "white",
    border: "none",
    fontSize: "20px",
    fontWeight: "600",
    color: disabled ? "#b5b0a6" : "#292929",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background 0.2s",
  }),
  adetSayi: {
    width: "42px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "700",
    color: "#292929",
    borderLeft: "1px solid #dcd6cd",
    borderRight: "1px solid #dcd6cd",
    fontFamily: "'Barlow', sans-serif",
  },
  ozet: {
    background: "#FAF7F2",
    border: "1px solid #eae5de",
    borderRadius: "16px",
    padding: "24px",
    minWidth: "260px",
    flex: 1,
    maxWidth: "380px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
  },
  ozetBaslik: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#292929",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eae5de",
  },
  ozetRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "15px",
    color: "#5F5F5F",
    marginBottom: "8px",
    fontFamily: "'Barlow', sans-serif",
  },
  ozetToplam: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #eae5de",
    fontWeight: "700",
    fontSize: "16px",
    color: "#CE2829",
    fontFamily: "'Barlow', sans-serif",
  },
  toplamFiyat: {
    color: "#CE2829",
    fontSize: "22px",
    fontWeight: "800",
    fontFamily: "'Barlow', sans-serif",
  },
  submitBtn: (disabled) => ({
    width: "100%",
    marginTop: "18px",
    padding: "16px",
    border: "none",
    borderRadius: "8px",
    background: disabled ? "#e0dbd3" : "#FDC913",
    color: disabled ? "#8a857d" : "#292929",
    fontSize: "16px",
    fontWeight: "700",
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "'Barlow', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    boxShadow: disabled ? "none" : "0 4px 12px rgba(253, 201, 19, 0.3)",
    transition: "all 0.2s",
  }),
  hataKutusu: {
    background: "#ffefef",
    border: "1px solid #f5c6cb",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#CE2829",
    fontSize: "14px",
    marginTop: "10px",
    fontWeight: "600",
    fontFamily: "'Barlow', sans-serif",
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