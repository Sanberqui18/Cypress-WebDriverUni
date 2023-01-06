/// <reference types ="Cypress" />

import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

let currentTime = new Date().toLocaleString();

describe('Test Contact Us form via WebdriverUni', () => {

    Cypress.config('defaultCommandTimeout', 20000);
    
    before(() => {
        cy.fixture('example').then((data) => {
            //this.data = data;
            globalThis.data = data; // Initialize the data in fixture file
        });            
    });

    beforeEach(() => {
        //cy.visit("http://webdriveruniversity.com/");
        //cy.get('#contact-us').invoke("removeAttr", 'target').click({force:  true});
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_button();
        //cy.pause();
    });

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('eql', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us/contactus.html');
        //cy.get('#contact-us').click();
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type('Test at ' + `${currentTime}`);
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });
    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type('Test failed at ' + `${currentTime}`);
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
    it('Should be able to submit a successful submission via contact us form using Cypress Custom Commands', () => {
        if(Cypress.isBrowser('firefox')){
            cy.log(`Not supporting firefox (testing)`);
        }else{
            cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, `Test passed at  + ${currentTime}`, "h1", "Thank You for your Message!");
        }
    });
    it('Should not be able to submit a successful submission via contact us form as all fields are required using Cypress Custom Commands', () => {

        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, ' ', `Test failed at  + ${currentTime}`, "body", "Error: Invalid email address");
    });
    it('Should be able to submit a successful submission via contact us form using Cypress.json', () => {

        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, `Test passed at  + ${currentTime}`, "h1", "Thank You for your Message!");
    });
    it.only('Should be able to submit a successful submission via contact us form using Page Object Model', () => {
        const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, `Test passed at  + ${currentTime}`, "h1", "Thank You for your Message!");
    });
    it('Should not be able to submit a successful submission via contact us form using Page Object Model', () => {
        const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, ' ', `Test failed at  + ${currentTime}`, "body", "Error: Invalid email address");
    });
});