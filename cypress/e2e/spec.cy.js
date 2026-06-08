describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("Teknolojik Yemekler Testleri", () => {

  beforeEach(() => {
    cy.visit("");
  });

  // 1. Input'a metin girme testi
  it("İsim inputuna metin girilebilir", () => {
    cy.get('input[name="isim"]').type("Ahmet");
    cy.get('input[name="isim"]').should("have.value", "Ahmet");
  });

  // 2. Birden fazla malzeme seçme testi
  it("Birden fazla malzeme seçilebilir", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Sosis").click();

    cy.contains("3 / 10").should("be.visible");
  });

  // 3. Formu gönderme testi
  it("Form eksiksiz doldurulunca sipariş verilebilir", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: { id: "42" },
    }).as("siparisGonder");

    cy.get('input[name="isim"]').type("Ahmet");
    cy.contains("S").click();
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();

    cy.contains("Sipariş Ver").click();
    cy.wait("@siparisGonder");

    cy.url().should("include", "/confirmation");
    cy.contains("Sipariş Alındı").should("be.visible");
  });

  // 4. Başlangıç fiyatı
  it("Sayfa açılınca baz fiyat 85.50₺ görünür", () => {
    cy.contains("85.50₺").should("be.visible");
  });

  // 5. 1 malzeme ekleyince fiyat 5₺ artar (85.50 + 5 = 90.50₺)
  it("1 malzeme seçince toplam 90.50₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("90.50₺").should("be.visible");
  });

  // 6. 4 malzeme seçince fiyat doğru hesaplanır (85.50 + 4*5 = 105.50₺)
  it("4 malzeme seçince toplam 105.50₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("105.50₺").should("be.visible");
  });

  // 7. Seçim fiyatı ayrıca doğru gösterilir (4 malzeme = 20₺)
  it("4 malzeme seçince seçim fiyatı 20.00₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("20.00₺").should("be.visible");
  });

  // 8. Adet artırınca toplam fiyat güncellenir (105.50 * 2 = 211.00₺)
  it("4 malzeme seçip adeti 2 yapınca toplam 211.00₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("+").click();
    cy.contains("211.00₺").should("be.visible");
  });

  // 9. Adet artırınca seçim fiyatı da güncellenir (4 malzeme * 5₺ * 2 adet = 40₺)
  it("4 malzeme seçip adeti 2 yapınca seçim fiyatı 40.00₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("+").click();
    cy.contains("40.00₺").should("be.visible");
  });

  // 10. Malzeme kaldırınca fiyat düşer
  it("Seçilen malzeme kaldırılınca fiyat düşer", () => {
    cy.contains("Pepperoni").click(); // +5₺ → 90.50₺
    cy.contains("90.50₺").should("be.visible");
    cy.contains("Pepperoni").click(); // kaldır → 85.50₺
    cy.contains("85.50₺").should("be.visible");
  });

  // 11. Adet azaltınca fiyat güncellenir
  it("Adet artırıp azaltınca fiyat tekrar eski haline döner", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("+").click(); // 2 adet → 211.00₺
    cy.contains("211.00₺").should("be.visible");
    cy.contains("−").click(); // 1 adete dön → 105.50₺
    cy.contains("105.50₺").should("be.visible");
  });

});