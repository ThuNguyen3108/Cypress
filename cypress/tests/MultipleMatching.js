describe('Multiple elements matching interaction', function() {
    it('should be able to interact with list of element', function() {
        // cy.log("2nd test")
        cy.visit("/login")
        // cy.get("input").eq(0).type("tomsmith")
        // cy.get("input").eq(1).type("SuperSecretPassword!")
       
        // Use closure
        // cy.get("input").then(items => {
        //     cy.get(items[0]).clear()
        //     cy.get(items[0]).type("tomsmith")
        //     cy.get(items[1]).clear()
        //     cy.get(items[1]).type("SuperSecretPassword!")
        // })

        // Use.each
        cy.get("input").each((item, index) => {
            cy.get(item).type("something")
        })

         cy.get("button[type='submit']").click()
        // debug purpose only
        cy.wait(2000)
    })
})