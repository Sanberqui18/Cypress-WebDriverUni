/// <reference types ="Cypress" />

describe('Test Datepicker via WebDriverUni', () => {
    it('Select datefrom the datepicker', () => {
        
        cy.visit("/");
        cy.get('#datepicker').invoke('removeAttr','target').click({force: true});

        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate()); //Get current day
        // cy.log(date.getDate()); //Get current day

        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5);
        // cy.log(date2.getDate()); //Get the current day + 5 days

        let date = new Date();
        date.setDate(date.getDate() + 360);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleDateString("default", {month: "long"});
        let futureDay = date.getDate()

        cy.log(`Future year to select ${futureYear}`);
        cy.log(`Future month to select ${futureMonth}`);
        cy.log(`Future day to select ${futureDay}`);

        function selectMonthAndYear(){
            cy.get('.datepicker-days').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                };
            }).then(() => {
                cy.get('.datepicker-days').find('.datepicker-switch').first().then((currentDate) => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    };
                });

            });
        };

        function selectFutureDay(){
            cy.get('[class ="day"]').contains(futureDay).click();
        };

        selectMonthAndYear();
        selectFutureDay();
    });
});