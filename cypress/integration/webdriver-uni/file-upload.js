/// <reference types ="Cypress" />

describe('Test file upload via WebDriverUni', () => {
    it('Upload a file...', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr','target').click({force: true});

        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png");
        cy.get('#submit-button').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contains('Your file has now been uploaded!');
            return true
        });

    });
    it('Upload no file...', () => {
        cy.visit('https://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr','target').click({force: true});

        cy.get('#submit-button').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contains('You need to select a file to upload!');
            return true
        });
        
    });
});