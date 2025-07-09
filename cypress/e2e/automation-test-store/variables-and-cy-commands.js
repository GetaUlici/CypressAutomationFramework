/// <reference types="Cypress" />


describe("Verifying variables, cyppress commands and jquery commands", () => {
    it("Explaining best practices", () => {
        cy.visit('https://www.automationteststore.com/')

        //The following order can fail, because cypres handles the order different than Selenium
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // makeupLink.click()
        // skincareLink.click()

        //The folllowing will pass but it's not best practice
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // makeupLink.click()
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // skincareLink.click()

        //Best pactice - recommended approach:
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('a[href*="product/category&path="]').contains('Skincare').click()
     });

      it("Navigating to specific product pages", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
            expect(headerText).is.eq('Makeup')
        })
     });

     it("Validate properties of the Contact Us Page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        //Uses the JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')
        })

        //Uses embeded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
     });

    })
