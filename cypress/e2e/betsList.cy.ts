describe('Test Scenario', () => {
    it('should not display any bets on the page except one which is updated from sockets', () => {
        cy.visit('/');
        // Intercept the bet list request and mock the response to have an empty list of bets
        cy.intercept('GET', 'https://api.csgoroll.com/graphql?operationName=DiceBets&variables=%7B%22orderBy%22:%22ID_DESC%22,%22first%22:20,%22gameTypes%22:%5B%22DICE%22%5D%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%22a152bd5d9f3e784bfa4ade053622c2b0fca690f97813779f0f6cf38a352f566b%22%7D%7D', (req) => {
            req.reply({
                statusCode: 200,
                body: {
                    data: {
                        diceBets: {
                            edges: [],
                            pageInfo: {
                                endCursor: "WzIzNjkzMzE3MCwxOV0=",
                                hasNextPage: false,
                                __typename: "PageInfo"

                            }
                        }
                    }
                }
            });
        }).as('emptyBetsList');

        // Wait for the response and ensure that the list is not showing any bet except one which is updated from sockets
        cy.wait('@emptyBetsList');
        cy.get('table')
            .find('tr')
            .should('have.length', 1);
        // cy.get('cw-dice-bet-list')
        //     .should('not.have.descendants', 'table')
        //     .and('be.empty');
    });
});