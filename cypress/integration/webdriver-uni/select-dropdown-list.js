/// <reference types ="Cypress" />

describe('Interact with dropdown lists via WebdriverUni', () => {
    it('Select specific values via select dropdown lists', () => {
        
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force: true});

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery').should('have.text','JQuery');

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven'); //based in value
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG').should('have.text', 'TestNG'); //based in text



    });
});