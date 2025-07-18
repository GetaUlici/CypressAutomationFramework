/// <reference types="Cypress" />


describe("Verify Autocomplete dropdown lists via WebdriverUni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if(prod === productToSelect) {
                // $el.click()
                cy.wrap($el).click()


                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
             cy.get('#myInput').type('G')
             cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

             const prod = $el.text()
             const productToSelect = 'Grapes'
                if(prod === productToSelect) {
                cy.wrap($el).click()


                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
                }
            })
        })
    })
})