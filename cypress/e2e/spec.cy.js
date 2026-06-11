describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("Teknolojik Yemekler Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  // 1 - İsim inputuna metin girilebilir
  it("İsim inputuna metin girilebilir", () => {
    cy.get('input[name="isim"]').type("Ahmet");
    cy.get('input[name="isim"]').should("have.value", "Ahmet");
  });

  // 2 - 3 karakterden kısa isimde hata mesajı gösterilir
  it("İsim 3 karakterden kısaysa hata mesajı görünür", () => {
    cy.get('input[name="isim"]').type("Al");
    cy.contains("İsim en az 3 karakter olmalı.").should("be.visible");
  });

  // 3 - Boyut seçilebilir
  it("Pizza boyutu seçilebilir", () => {
    cy.get('input[name="boyut"][value="Orta"]').check({ force: true });
    cy.get('input[name="boyut"][value="Orta"]').should("be.checked");
  });

  // 4 - Hamur kalınlığı seçilebilir
  it("Hamur kalınlığı seçilebilir", () => {
    cy.get('select[name="hamur"]').select("İnce");
    cy.get('select[name="hamur"]').should("have.value", "İnce");
  });

  // 5 - Malzeme seçilebilir ve sayaç güncellenir
  it("Ek malzeme seçilebilir", () => {
    cy.get('input[type="checkbox"][value="Pepperoni"]').check({ force: true });
    cy.get('input[type="checkbox"][value="Pepperoni"]').should("be.checked");
  });

  // 6 - 4'ten az malzeme seçildiğinde hata mesajı görünür
  it("4'ten az malzeme seçildiğinde uyarı gösterilir", () => {
    cy.get('input[type="checkbox"][value="Pepperoni"]').check({ force: true });
    cy.contains("En az 4 malzeme seçmelisiniz.").should("be.visible");
  });

  // 7 - Sipariş ver butonu geçersiz formda disabled olur
  it("Form geçersizken sipariş ver butonu disabled olur", () => {
    cy.get('button[type="submit"]').should("be.disabled");
  });

  // 8 - Geçerli form doldurulunca sipariş ver butonu aktif olur
  it("Form geçerliyken sipariş ver butonu aktif olur", () => {
    cy.get('input[name="boyut"][value="Orta"]').check({ force: true });
    cy.get('select[name="hamur"]').select("Normal");
    ["Pepperoni", "Domates", "Biber", "Sosis"].forEach((m) => {
      cy.get(`input[type="checkbox"][value="${m}"]`).check({ force: true });
    });
    cy.get('input[name="isim"]').type("Ahmet");
    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  // 9 - Adet artırma butonu çalışır
  it("Adet artırma butonu çalışır", () => {
    cy.contains("button", "+").click();
    cy.get(".adet-sayi").should("have.text", "2");
  });

  // 10 - Sipariş gönderilince confirmation sayfasına yönlendirilir
  it("Geçerli sipariş sonrası confirmation sayfasına gidilir", () => {
    cy.get('input[name="boyut"][value="Büyük"]').check({ force: true });
    cy.get('select[name="hamur"]').select("Kalın");
    ["Pepperoni", "Domates", "Biber", "Sosis"].forEach((m) => {
      cy.get(`input[type="checkbox"][value="${m}"]`).check({ force: true });
    });
    cy.get('input[name="isim"]').type("Liva");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/confirmation");
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
  });
  
});