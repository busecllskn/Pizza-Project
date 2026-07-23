import { useHistory } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#CE2829",
    fontFamily: "'Quattrocento', sans-serif",
    display: "flex",
    flexDirection: "column",
  },

  //Header part
  header: {
    textAlign: "center",
    padding: "35px 25px",
  },
  headerLogo: {
    fontFamily: "'Barlow', serif",
    fontSize: "44px",
    fontWeight: "800",
    color: "white",
    margin: 0,
    letterSpacing: "1px",
  },

  // Main
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 25px 60px",
  },

  //Hero text alanı
  hero: {
    textAlign: "center",
    marginBottom: "30px",
  },
  lezzetText: {
    fontFamily: "Barlow, serif",
    fontSize: "28px",
    fontStyle: "italic",
    color: "#FDC913",
    margin: "0 0 10px",
    letterSpacing: "1px",
  },
  siparisAlindi: {
    fontFamily: "Barlow, serif",
    fontSize: "56px",
    fontWeight: "400",
    color: "white",
    margin: 0,
    letterSpacing: "3px",
    textTransform: "uppercase",
    lineHeight: 1,
  },

  // Ayırıcı
  divider: {
    width: "600px",
    maxWidth: "100vw",
    border: "none",
    borderTop: "2px solid #FAF7F2",
    margin: "0 0 35px",
  },

  // Detay part (Yanlara biraz daha yayıldı ve büyüdü)
  detayWrap: {
    width: "100%",
    maxWidth: "540px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },
  pizzaAdi: {
    fontFamily: "Barlow, serif",
    fontSize: "24px",
    fontWeight: "200",
    color: "white",
    textAlign: "center",
  },
  detaySatirlar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  detaySatir: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    fontSize: "15px",
  },
  detayEtiket: {
    color: "#FAF7F2",
    minWidth: "140px",
    flexShrink: 0,
  },
  detayDeger: {
    color: "#FAF7F2",
    fontWeight: "500",
    textAlign: "right",
  },
  malzemeDeger: {
    color: "#FAF7F2",
    fontWeight: "500",
    textAlign: "right",
  },

  // Özet alanı
  ozetKutu: {
    width: "100%",
    background: "#CE2829",
    border: "1px solid #FAF7F2",
    borderRadius: "6px",
    padding: "24px 24px",
  },
  ozetBaslik: {
    fontFamily: "'Barlow', serif",
    fontSize: "17px",
    fontWeight: "500",
    color: "#FAF7F2",
    marginBottom: "12px",
  },
  ozetSatir: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    color: "#FAF7F2",
    marginBottom: "6px",
  },
  ozetSatirToplam: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "800",
    color: "#FAF7F2",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #FAF7F2",
  },
  toplamFiyat: {
    color: "#FAF7F2",
    fontFamily: "Barlow, serif",
    fontSize: "17px",
  },

  // Axios
  axiosWrap: {
    width: "100%",
    background: "#5F5F5F",
    borderRadius: "10px",
    padding: "18px 22px",
  },
  axiosBaslik: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#FAF7F2",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 10px",
  },
  axiosIcerik: {
    fontSize: "14px",
    color: "#FAF7F2",
    margin: 0,
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },

  //Buton
  btn: {
    marginTop: "10px",
    padding: "18px 48px",
    borderRadius: "40px",
    border: "2px solid #FAF7F2",
    background: "transparent",
    color: "#FAF7F2",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
  },

  bosWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    color: "#FAF7F2",
    fontSize: "22px",
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
              <span>{secimFiyat ? secimFiyat.toFixed(2) : "0.00"}₺</span>
            </div>
            <div style={styles.ozetSatirToplam}>
              <span>Toplam</span>
              <span style={styles.toplamFiyat}>
                {toplamFiyat ? toplamFiyat.toFixed(2) : "0.00"}₺
              </span>
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