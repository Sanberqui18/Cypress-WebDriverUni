/// <reference types ="Cypress" />

let currentTime = new Date().toLocaleString();

//import user from '../fixtures/userDetails.json' //Other fixture alternative

describe('Test Contact Us form via Automation Test Store', () => {

    before(() => {
        //cy.viewport(550, 750);
        cy.fixture('userDetails').as("user");
    });

    it('Should be able to submit a successful submission via contact us form',{
        retries: {
            runMode: 0,
            openMode: 0
        }
    }, () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href$='contact']").click().then( (buttonText) => {
            cy.log("Button text is " + buttonText.text());
            expect(buttonText.text()).to.eql("Contact Us");
        });
        //cy.xpath("//a[@href='https://automationteststore.com/index.php?rt=content/contact']").click();

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('eql', 'Contact Us');
        cy.url().should('include', 'index.php?rt=content/contact');

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        });

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry'). type('Tested at ' + `${currentTime}`);
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has Completed!");
    });
})