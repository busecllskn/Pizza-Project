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
    padding: "30px 25px",
  },
  headerLogo: {
    fontFamily: "'Barlow', serif",
    fontSize: "40px",
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
    padding: "40px 25px 60px",
  },

  //Hero text alanı
  hero: {
    textAlign: "center",
    marginBottom: "30px",
  },
  lezzetText: {
    fontFamily: "Barlow, serif",
    fontSize: "25px",
    fontStyle: "italic",
    color: "#FDC913",
    margin: "0 0 10px",
    letterSpacing: "1px",
  },
  siparisAlindi: {
    fontFamily: "Barlow, serif",
    fontSize: "50px",
    fontWeight: "400",
    color: "white",
    margin: 0,
    letterSpacing: "3px",
    textTransform: "uppercase",
    lineHeight: 1,
  },

  // Ayırıcı
  divider: {
    width: "500px",
    maxWidth: "100vw",
    border: "none",
    borderTop: "2px solid #FAF7F2)",
    margin: "0 0 30px",
  },

  // Detay part
  detayWrap: {
    width: "100%",
    maxWidth: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  pizzaAdi: {
    fontFamily: "Barlow, serif",
    fontSize: "20px",
    fontWeight: "200",
    color: "white",
    textAlign: "center",
  },
  detaySatirlar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  detaySatir: {
    display: "flex",
    gap: "0",
    fontSize: "13px",
  },
  detayEtiket: {
    color: "#FAF7F2",
    minWidth: "100px",
    flexShrink: 0,
  },
  detayDeger: {
    color: "#FAF7F2",
    fontWeight: "500",
  },
  malzemeDeger: {
    color: "#FAF7F2",
    fontWeight: "500",
  },

  // Özet alanı
  ozetKutu: {
    width: "100%",
    background: "#CE2829",
    border: "1px solid #FAF7F2",
    borderRadius: "5px",
    padding: "20px 20px",
  },
  ozetBaslik: {
    fontFamily: "'Barlow', serif",
    fontSize: "15px",
    fontWeight: "500",
    color: "#FAF7F2",
  },
  ozetSatir: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    color: "#FAF7F2",
  },
  ozetSatirToplam: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    fontWeight: "800",
    color: "#FAF7F2",
    marginTop: "10px",
    paddingTop: "10px",
  },
  toplamFiyat: {
    color: "#FAF7F2",
    fontFamily: "Barlow, serif",
    fontSize: "15px",
  },

  // Axios
  axiosWrap: {
    width: "100%",
    background: " #5F5F5F",
    borderRadius: "10px",
    padding: "15px 20px",
    border: " #5F5F5F)",
  },
  axiosBaslik: {
    fontSize: "15px",
    fontWeight: "600",
    color: " #5F5F5F",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 8px",
  },
  axiosIcerik: {
    fontSize: "15px",
    color: " #5F5F5F",
    margin: 0,
  },

  //Buton
  btn: {
    marginTop: "10px",
    padding: "15px 40px",
    borderRadius: "40px",
    border: "2px solid #FAF7F2",
    background: "transparent",
    color: "#FAF7F2",
    fontSize: "13px",
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
    gap: "10px",
    color: "#FAF7F2",
    fontSize: "20px",
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