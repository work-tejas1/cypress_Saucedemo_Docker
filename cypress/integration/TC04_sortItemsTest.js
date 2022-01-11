/// <reference types="cypress" />
import LoginPage from '../../cypress/support/pageObjects/LoginPage'
import LandingPage from '../../cypress/support/pageObjects/LandingPage'

describe('Sort functionality check for all sorting possibilities', () => {
    const loginPage = new LoginPage()
    const landingPage = new LandingPage()

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("sortFunctionData").then((data) => {
            globalThis.data = data;
        })
    })

    it('Login then check inventory item total and default sort', function () {
        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()
        cy.url().should('include', 'inventory')
        landingPage.sortProducts().should("have.value", 'az')
        landingPage.inventoryItem().should("have.length", data.inventoryTotalItems)
    })

    it('Sort Products By Name Z To A and check first item RED shirt', function () {
        cy.sortItems('za', data.tShirtRed)
    })

    it('Sort Products By Low to High and check first item Onesie', function () {
        cy.sortItems('lohi', data.lowestOnesie)
    })

    it('Sort Products By High to Low and check first item Fleecee Jacket', function () {
        cy.sortItems('hilo', data.fleeceJacket)
    })

})
