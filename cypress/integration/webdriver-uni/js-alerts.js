/// <reference types ="Cypress" />

describe('Handle JS Alerts', () => {
    it('Confirm JS alert contains the correct text', () => {
        
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});

        cy.get('#button1').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });
    it('Validate JS Confirm Alert Box Works Correctly When Clicking Ok', () => {
        
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});

        cy.get('#button4').click();

        cy.on('window:alert', (str) => {
            return true;
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });
    it('Validate JS Confirm Alert Box Works Correctly When Clicking Cancel', () => {
        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});

        cy.get('#button4').click();

        cy.on('window:confirm', (str) => { //allows to cancel a JS alert
            return false;
            
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });
    it('Validate JS Confirm Alert Box Using a stub()', () => {
        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});

        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })
    });
});