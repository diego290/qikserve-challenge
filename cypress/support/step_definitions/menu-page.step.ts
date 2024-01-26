import { Then as Entao, When as Quando, } from "@badeball/cypress-cucumber-preprocessor";

Entao('eu devo ver os itens do menu', () => {
  cy.get('[data-testid="open-modal-item-details"]').should('be.visible');
});

Quando('clicar no item', () => {
  cy.get('[data-testid="open-modal-item-details"]').first().click();
});

Entao('eu devo ver os detalhes do item', () => {
  cy.get('[data-testid="item-details-modal"]').should('be.visible');
});

Quando('clicar no botão de adicionar ao carrinho', () => {
  cy.get('[data-testid="add-to-order-button"]').eq(1).click();
});

Entao('eu devo ver o item no carrinho', () => {
  cy.get('[data-testid="cart-item"]').should('be.visible');
});
