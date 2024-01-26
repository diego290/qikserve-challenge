import { When as Quando, Given as Dado, } from "@badeball/cypress-cucumber-preprocessor";

Dado('que eu estou na página do menu', () => {
  cy.intercept('GET', '/venue/9', { fixture: 'mock-restaurant.json' }).as('getRestaurantDetails');
  cy.intercept('GET', '/menu', { fixture: 'mock-menu.json' }).as('getMenuDetails');
  cy.visit('/');
});

Quando('a página é carregada', () => {
  cy.wait('@getRestaurantDetails');
  cy.wait('@getMenuDetails');
});
