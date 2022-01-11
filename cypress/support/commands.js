Cypress.Commands.add('addProductToBasket', productName => {
    cy.get(".inventory_item_name").each(($el, index, $list) => {
        if ($el.text() == productName) {
            //cy.log($el.text())
            cy.get("[data-test*='add-to-cart']").eq(index).click({ timeout: 10000 })
        }
    })
});

Cypress.Commands.add('enterUserDetails', (firstName, lastName, postalCode) => {
    cy.get("[data-test='firstName']").type(firstName).should("have.value", firstName)
    cy.get("[data-test='lastName']").type(lastName).should("have.value", lastName)
    cy.get("[data-test='postalCode']").type(postalCode).should("have.value", postalCode)
})

Cypress.Commands.add('checkAmount', () => {
    cy.get(".summary_subtotal_label").invoke('text').then(($noTaxAmount) => {
        expect($noTaxAmount).contains(data.amountWithoutTax)
    })
    cy.get(".summary_tax_label").invoke('text').then(($taxAmount) => {
        expect($taxAmount).contains(data.tax)
    })
    cy.get(".summary_total_label").invoke('text').then(($totalAmount) => {
        expect($totalAmount).contains(data.total)
    })
})

Cypress.Commands.add('sortItems', ($sort, $value) => {
    cy.get('[data-test="product_sort_container"]').select($sort)
    cy.get('[data-test="product_sort_container"]').should("have.value", $sort)
    cy.get(".inventory_item_name").eq(0).should("have.text", $value)
})



