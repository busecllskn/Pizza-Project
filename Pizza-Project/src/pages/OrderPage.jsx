import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import PizzaHeader from "../components/PizzaHeader";
import PizzaHero from "../components/PizzaHero";
import SizeAndDough from "../components/SizeAndDough";
import ToppingSelector from "../components/ToppingSelector";
import OrderSummary from "../components/OrderSummary";

// ─── Sabitler ───────────────────────────────────────────────────────────────
const BAZ_FIYAT = 85.5;
const MALZEME_FIYAT = 5;

const initialForm = {
  boyut: "",
  hamur: "",
  malzemeler: [],
  isim: "",
  not: "",
  adet: 1,
};

// ─── Stiller ────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f2ef",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  main: {
    maxWidth: "620px",
    margin: "0 auto",
    padding: "0 24px 60px",
  },
  card: {
    background: "#fff",
    borderRadius: "24px",
    padding: "32px 36px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)",
    marginTop: "32px",
  },
  formGroup: {
    marginBottom: "24px",
  },
  fieldLabel: {
    display: "block",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "14px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "8px",
    letterSpacing: "0.3px",
  },
  zorunlu: {
    color: "#c0392b",
    marginLeft: "2px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "2px solid #e8e0db",
    background: "#fafafa",
    fontSize: "14px",
    color: "#333",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.18s",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "2px solid #e8e0db",
    background: "#fafafa",
    fontSize: "14px",
    color: "#333",
    outline: "none",
    fontFamily: "inherit",
    resize: "vertical",
    minHeight: "80px",
    transition: "border-color 0.18s",
    boxSizing: "border-box",
  },
  errorMsg: {
    display: "inline-block",
    marginTop: "6px",
    fontSize: "12px",
    color: "#c0392b",
    background: "#fff0ee",
    padding: "3px 10px",
    borderRadius: "6px",
    fontWeight: "500",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function OrderPage({ setSiparis, setAxiosYaniti }) {
  const history = useHistory();
  const [formData, setFormData] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hata, setHata] = useState("");

  // Validasyon
  useEffect(() => {
    const isimValid = formData.isim.trim().length >= 3;
    const malzemeValid =
      formData.malzemeler.length >= 4 && formData.malzemeler.length <= 10;
    const boyutValid = formData.boyut !== "";
    setIsValid(isimValid && malzemeValid && boyutValid);
  }, [formData]);

  // Genel değişiklik handler'ı
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked && formData.malzemeler.length >= 10) return;
      const yeniMalzemeler = checked
        ? [...formData.malzemeler, value]
        : formData.malzemeler.filter((item) => item !== value);
      setFormData({ ...formData, malzemeler: yeniMalzemeler });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Adet kontrolleri
  const handleAdetArtir = () =>
    setFormData((prev) => ({ ...prev, adet: prev.adet + 1 }));

  const handleAdetAzalt = () =>
    setFormData((prev) => ({
      ...prev,
      adet: prev.adet > 1 ? prev.adet - 1 : 1,
    }));

  // Fiyat hesaplama
  const secimFiyat = formData.malzemeler.length * MALZEME_FIYAT * formData.adet;
  const birimFiyat = BAZ_FIYAT + formData.malzemeler.length * MALZEME_FIYAT;
  const toplamFiyat = birimFiyat * formData.adet;

  // Sipariş gönder
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    setHata("");
    setLoading(true);

    const siparisVerisi = {
      isim: formData.isim,
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.malzemeler,
      not: formData.not,
      adet: formData.adet,
      secimFiyat,   // sadece ek malzeme maliyeti
      toplamFiyat,  // baz + malzeme + adet = nihai toplam
    };

    axios
      .post("https://reqres.in/api/pizza", formData, {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      .then((response) => {
        setAxiosYaniti(response.data);
      })
      .catch((error) => {
        if (!error.response) {
          setHata("İnternete bağlanılamadı. Lütfen bağlantınızı kontrol edin.");
        } else {
          setHata("Sunucu hatası oluştu: " + error.response.status);
        }
        setAxiosYaniti(null);
      })
      .finally(() => {
        setLoading(false);
        setSiparis(siparisVerisi);
        setFormData(initialForm);
        history.push("/confirmation");
      });
  };

  return (
    <div style={styles.page}>
      <PizzaHeader />

      <main style={styles.main}>
        <PizzaHero />

        <div style={styles.card}>
          <form onSubmit={handleSubmit}>
            {/* Boyut + Hamur */}
            <SizeAndDough formData={formData} handleChange={handleChange} />

            {/* Malzeme seçici */}
            <ToppingSelector
              malzemeler={formData.malzemeler}
              handleChange={handleChange}
            />

            {/* İsim */}
            <div style={styles.formGroup}>
              <label style={styles.fieldLabel}>
                Adınız <span style={styles.zorunlu}>*</span>
              </label>
              <input
                type="text"
                name="isim"
                placeholder="Adınızı giriniz"
                value={formData.isim}
                onChange={handleChange}
                minLength="3"
                required
                style={styles.input}
              />
              {formData.isim.length > 0 && formData.isim.length < 3 && (
                <span style={styles.errorMsg}>İsim en az 3 karakter olmalı.</span>
              )}
            </div>

            {/* Sipariş notu */}
            <div style={styles.formGroup}>
              <label style={styles.fieldLabel}>Sipariş Notu</label>
              <textarea
                name="not"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.not}
                onChange={handleChange}
                style={styles.textarea}
              />
            </div>

            {/* Özet + Sipariş ver */}
            <OrderSummary
              adet={formData.adet}
              onArtir={handleAdetArtir}
              onAzalt={handleAdetAzalt}
              malzemeSayisi={formData.malzemeler.length}
              toplamFiyat={toplamFiyat}
              secimFiyat={secimFiyat}
              isValid={isValid}
              loading={loading}
              hata={hata}
            />
          </form>
        </div>
      </main>
    </div>
  );
}