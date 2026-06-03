describe("Teknolojik Yemekler Testleri", () => {

  beforeEach(() => {
    cy.visit("/order");
  });

  // Input'a metin giren test ekleme
  it("İsim inputuna metin girilebilir", () => {
    cy.get('input[name="isim"]').type("Ahmet");
    cy.get('input[name="isim"]').should("have.value", "Ahmet");
  });

  // Birden fazla malzeme seçme testi
  it("Birden fazla malzeme seçilebilir", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Sosis").click();

    cy.contains("3 / 10").should("be.visible");
  });

  // Formu gönderme testi
  it("Form eksiksiz doldurulunca sipariş verilebilir", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 202,
      body: { id: "38" },
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

  // 1 malzeme ekleyince fiyat 5₺ artıyor mu (85.50 + 5 = 90.50₺)
  it("1 malzeme seçince toplam 90.50₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("90.50₺").should("be.visible");
  });

  // Adet artırınca toplam fiyat güncelleniyo mu (105.50 * 2 = 211.00₺)
  it("4 malzeme seçip adeti 2 yapınca toplam 211.00₺ olur", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Domates").click();
    cy.contains("Biber").click();
    cy.contains("Sosis").click();
    cy.contains("+").click();
    cy.contains("211.00₺").should("be.visible");
});

});