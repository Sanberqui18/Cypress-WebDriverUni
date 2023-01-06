/// <reference types ="Cypress" />

describe('Iterate over elements', () => {

    beforeEach(() =>{
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    });

    it('Log information of all hair care products', () => {

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log(`Index ${index} : ${$el.text()}`);
            cy.log(`${$list.text()}`);
        }); //You can stop the .each() loop early by returning false in the callback function.

    })
    it('Add spceific product to basket', () => {

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            }; //You can stop the .each() loop early by returning false in the callback function.
        }); 
    });
    it.only('Add spceific product to basket using Cypress Commands', () => {

        cy.selectProduct('Curls to straight Shampoo');

    });
    it.only('Add another spceific product to basket using Cypress Commands', () => {
        
        cy.selectProduct('Seaweed Conditioner');

    });
    it.only('Add another spceific product to basket using Cypress Commands', () => {
        
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');

    });
});