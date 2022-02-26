describe("check that kino website is working", () => {
    it("Successfully vistits localhost, port 5080", () => {
        cy.visit("http://localhost:5080")
    })
})