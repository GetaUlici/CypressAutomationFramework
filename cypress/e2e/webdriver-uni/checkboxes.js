/// <reference types="Cypress" />


describe("Verify checkboxes via WebdriverUni", () => {
    it("Check and validate checkboxes", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    })

    it("Uncheck and validate checkboxes", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })
    
    it("Check multiple checkboxes", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    })
})