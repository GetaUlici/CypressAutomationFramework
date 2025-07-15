/// <reference types="Cypress" />


describe("Cypress Web security restriction", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")
    }) //test failed, as expected

     it.only("Validate visiting two different domains via user actions", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    }) // test passes with this specific line added to cypress config       chromeWebSecurity: false

    it("Navigates from WebDriver University to Automation Test Store", () => {
    cy.visit("https://www.webdriveruniversity.com"); // Start on WebDriver University
 
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click(); // Click link to new website
 
    cy.origin('https://automationteststore.com', () => {
      cy.get('.info_links_footer > :nth-child(5) > a', { timeout: 10000 }).should('be.visible').click(); // Click something on the new website
    });
  });
})