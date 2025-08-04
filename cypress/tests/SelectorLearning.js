describe('Element interaction', () => {
    it('should be able to complete the form', () => {
        // cy.log("Hello")
        // Open the login form page
        cy.visit("/login")

        // find username by ID then input the text
        cy.get("#username").type("tomsmith");

        // find password by attribute name then input the text
        cy.get("[name = 'password']").type("SuperSecretPassword!");

        // find login btn by attribute and tag name then click
        cy.get("button[type='submit']").click()

        //Debug purpose only
        cy.wait(3000);
    });
});