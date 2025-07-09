/// <reference types="Cypress" />


describe("Test Contact Us form via Automation Test Store", () => {
   
   
    // it("Should be able to submit a successful submission via contact us form - with cy.origin", () => {
    //     cy.visit("https://www.automationteststore.com/");
 
    //     // Step 1: Click the "Contact Us" link
    //     cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(selectedButtonText) {
    //    console.log("The following button was selected: " + selectedButtonText.text())
    //    cy.log('Clicked on link using text: ' + selectedButtonText())
    //     })
 
    //     // Step 2: Cypress switches to automationteststore.com and interacts with the form
    //     cy.origin('https://automationteststore.com', () => {
    //         cy.get('#ContactUsFrm_first_name').type("Joe");
    //         cy.get('#ContactUsFrm_email').type("joe_blogs@example.com");
    //         cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
    //         cy.get('.col-md-6 > .btn').click();
    //     });
    // });
    
it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!");
    });
});