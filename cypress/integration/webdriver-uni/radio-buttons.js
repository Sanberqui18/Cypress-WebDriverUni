/// <reference types ="Cypress" />

describe('Verify Radio Buttons via WebdriverUni', () => {
    
    before(() => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force: true});
    });

    it('Check specific Radio Buttons', () => {
        
        cy.get('#radio-buttons').find("[type='radio']").first().check().should('be.checked');
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check().should('be.checked');
    });
    it('Validate the states of specific Radio Buttons', () => {
        
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

        cy.get("[value='lettuce']").check().should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
        
    });
});