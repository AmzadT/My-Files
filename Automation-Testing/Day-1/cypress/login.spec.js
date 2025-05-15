describe('Login to the App', function(){
    it('Login to the App by visiting the login page', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.url().should('include', '/secure')
        cy.url().should('include', '/index.html')
        
    });
})