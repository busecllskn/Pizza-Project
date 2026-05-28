import { useHistory } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #c0392b 0%, #e74c3c 100%)",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
  },

  // ── Header ──────────────────────────────────────────────
  header: {
    textAlign: "center",
    padding: "32px 24px 0",
  },
  headerLogo: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "26px",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
    letterSpacing: "0.5px",
    textShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },

  // ── Main ────────────────────────────────────────────────
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 24px 60px",
  },

  // ── Hero text ───────────────────────────────────────────
  hero: {
    textAlign: "center",
    marginBottom: "28px",
  },
  lezzetText: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#f9c74f",
    margin: "0 0 8px",
    letterSpacing: "0.5px",
  },
  siparisAlindi: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "52px",
    fontWeight: "900",
    color: "#fff",
    margin: 0,
    letterSpacing: "3px",
    textTransform: "uppercase",
    textShadow: "0 3px 16px rgba(0,0,0,0.15)",
    lineHeight: 1.1,
  },

  // ── Divider ─────────────────────────────────────────────
  divider: {
    width: "500px",
    maxWidth: "90vw",
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.35)",
    margin: "0 0 28px",
  },

  // ── Detay alanı ─────────────────────────────────────────
  detayWrap: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  pizzaAdi: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
    textAlign: "center",
    letterSpacing: "0.3px",
  },
  detaySatirlar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  detaySatir: {
    display: "flex",
    gap: "8px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  detayEtiket: {
    color: "rgba(255,255,255,0.65)",
    minWidth: "120px",
    flexShrink: 0,
  },
  detayDeger: {
    color: "#fff",
    fontWeight: "600",
  },
  malzemeDeger: {
    color: "#f9c74f",
    fontWeight: "600",
  },

  // ── Özet kutusu ─────────────────────────────────────────
  ozetKutu: {
    width: "100%",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "16px",
    padding: "20px 24px",
    backdropFilter: "blur(8px)",
  },
  ozetBaslik: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "15px",
    fontWeight: "700",
    color: "#fff",
    margin: "0 0 14px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
  ozetSatir: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "8px",
  },
  ozetSatirToplam: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    fontWeight: "800",
    color: "#fff",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
  },
  toplamFiyat: {
    color: "#f9c74f",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "20px",
  },

  // ── Axios yanıtı ─────────────────────────────────────────
  axiosWrap: {
    width: "100%",
    background: "rgba(0,0,0,0.2)",
    borderRadius: "12px",
    padding: "16px 20px",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  axiosBaslik: {
    fontSize: "12px",
    fontWeight: "700",
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 8px",
  },
  axiosIcerik: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.7)",
    margin: 0,
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    fontFamily: "'Courier New', monospace",
  },

  // ── Buton ────────────────────────────────────────────────
  btn: {
    marginTop: "8px",
    padding: "14px 40px",
    borderRadius: "40px",
    border: "2px solid rgba(255,255,255,0.7)",
    background: "transparent",
    color: "#fff",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.18s",
    fontFamily: "inherit",
  },

  // ── Boş durum ────────────────────────────────────────────
  bosWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    color: "#fff",
    fontSize: "16px",
  },
};

export default function ConfirmationPage({ siparis, axiosYaniti }) {
  const history = useHistory();

  if (!siparis) {
    return (
      <div style={{ ...styles.page, justifyContent: "center" }}>
        <div style={styles.bosWrap}>
          <p>Henüz bir sipariş verilmedi.</p>
          <button style={styles.btn} onClick={() => history.push("/")}>
            Anasayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  const {
    isim,
    boyut,
    hamur,
    malzemeler = [],
    not,
    adet,
    secimFiyat,
    toplamFiyat,
  } = siparis;

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.headerLogo}>Teknolojik Yemekler</h1>
      </header>

      <main style={styles.main}>
        {/* Başlık */}
        <div style={styles.hero}>
          <p style={styles.lezzetText}>lezzetin yolda</p>
          <h2 style={styles.siparisAlindi}>Sipariş Alındı</h2>
        </div>

        <hr style={styles.divider} />

        <div style={styles.detayWrap}>
          <h3 style={styles.pizzaAdi}>Position Absolute Acı Pizza</h3>

          {/* Detay satırları */}
          <div style={styles.detaySatirlar}>
            {[
              { etiket: "İsim:", deger: isim },
              { etiket: "Boyut:", deger: boyut },
              { etiket: "Hamur:", deger: hamur },
              { etiket: "Adet:", deger: adet },
            ].map(({ etiket, deger }) => (
              <div key={etiket} style={styles.detaySatir}>
                <span style={styles.detayEtiket}>{etiket}</span>
                <span style={styles.detayDeger}>{deger}</span>
              </div>
            ))}

            {malzemeler.length > 0 && (
              <div style={styles.detaySatir}>
                <span style={styles.detayEtiket}>Ek Malzemeler:</span>
                <span style={styles.malzemeDeger}>{malzemeler.join(", ")}</span>
              </div>
            )}

            {not && (
              <div style={styles.detaySatir}>
                <span style={styles.detayEtiket}>Not:</span>
                <span style={styles.detayDeger}>{not}</span>
              </div>
            )}
          </div>

          {/* Fiyat özeti */}
          <div style={styles.ozetKutu}>
            <p style={styles.ozetBaslik}>Sipariş Toplamı</p>
            <div style={styles.ozetSatir}>
              <span>Seçimler</span>
              <span>{secimFiyat.toFixed(2)}₺</span>
            </div>
            <div style={styles.ozetSatirToplam}>
              <span>Toplam</span>
              <span style={styles.toplamFiyat}>{toplamFiyat.toFixed(2)}₺</span>
            </div>
          </div>

          {/* Axios yanıtı */}
          {axiosYaniti && (
            <div style={styles.axiosWrap}>
              <p style={styles.axiosBaslik}>Sunucu Yanıtı</p>
              <pre style={styles.axiosIcerik}>
                {JSON.stringify(axiosYaniti, null, 2)}
              </pre>
            </div>
          )}

          <button style={styles.btn} onClick={() => history.push("/")}>
            Anasayfaya Dön
          </button>
        </div>
      </main>
    </div>
  );
}