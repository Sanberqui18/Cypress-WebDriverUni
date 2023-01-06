/// <reference types ="cypress" />

describe('Test mouse actions', () => {
    it('Scroll element into view', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force: true});
        
    });
    it('Should be able to drag and drop a draggable item', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force: true});
        
        cy.get('#draggable').trigger('mousedown', {which:1}); //clicks and hold on the center of given element

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
    });
    it('Should be able to perform a double mouse click', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force: true});

        cy.get('#double-click').dblclick();
        
    });
    it.only('Should be able to hold down the left mouse click button on a given element', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force: true});

        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.contain('Well done!');
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        });

        cy.get('#click-box').trigger('mouseup').then(($element) => {
            expect($element).to.contain('Dont release me!!!');
            expect($element).to.have.css('background-color', 'rgb(255, 99, 71)');
        });

    });
    it.only('Should be able to hold on a menu and display a menu bar', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force: true});
        
        cy.get('#div-hover').contains('Hover Over Me First!').trigger('mouseover', {which:1}).click();
        cy.get('.list-alert').contains('Link 1').click({force:true});

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Well done you clicked on the link!');
            return true;

        }).then(() => {
            cy.get('#div-hover').contains('Hover Over Me Second!').trigger('mouseover', {which:1}).click();
            cy.get('.list-alert').contains('Link 1').click({force:true});

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Well done you clicked on the link!');
                return true;
                
            });
        });

        cy.get('#div-hover').contains('Hover Over Me Third!').trigger('mouseover', {which:1}).click();

    });
});