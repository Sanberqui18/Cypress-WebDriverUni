/// <reference types ="Cypress" />

describe('JSON Object', () => {
    it('JSON Object Examples', () => {
        const exampleObject = {
            "key": "Tim",
            "key2": "Jones"
        };

        const exampleArrayOfValues = ["Sopihe", "Rose", "Howard"];

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2"
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        };

        const exampleArrayOfObjects = [
            {
                "key": "Luke"
            },
            {
                "key": "Derek"
            },
            {
                "key": "Stephen"
            },

        ]

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key); //Tim
        cy.log(exampleObject.key2); //Jones

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose
        cy.log(exampleArrayOfValues[2]); //Howard

        cy.log(users.firstName); //Joe
        cy.log(users.Students[0].lastName); //Blogs2

        cy.log(exampleArrayOfObjects[0].key); //Luke
        cy.log(exampleArrayOfObjects[1].key); //Derek
        cy.log(exampleArrayOfObjects[2].key); //Stepehen


    });
});