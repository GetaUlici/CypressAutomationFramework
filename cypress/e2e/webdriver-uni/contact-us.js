/// <reference types="Cypress" />


describe("Test Contact Us from via WebdriverUni", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', ('UTF-8'))
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type('email@email.com')
        cy.get('textarea.feedback-input').type('This is a funny message')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("Should not be able to submit a successful submission via Contact Us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('textarea.feedback-input').type('This is a funny message')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})