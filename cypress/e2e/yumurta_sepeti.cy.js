/// <reference types="cypress" />

describe("Yumurta Sepeti Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#yumura-sepeti-link").click();
  });

  it("100 tane büyük boy yurmuta alalım", () => {
    cy.get("[data-cy=yumurta-ebat-select]").select("Büyük");
    cy.get("#yumuta-100-btn").click();

    cy.get("#fiyat-span").should("have.text", "1800");
  });

  it("10 tane orta boy yurmuta alalım", () => {
    cy.get("[data-cy=yumurta-ebat-select]").select("Orta");

    const arttirBtn = cy.get("#yumurta-arttir-btn");

    for (let i = 0; i < 10; i++) {
      arttirBtn.click();
    }

    cy.get("#fiyat-span").should("have.text", "150");
  });
});
