/// <reference types="cypress" />
import LoginPage from '../../cypress/support/pageObjects/LoginPage'
import LandingPage from '../../cypress/support/pageObjects/LandingPage'

describe('Check sub menu item length and logout functionality', () => {
    const loginPage = new LoginPage()
    const landingPage = new LandingPage()
  
    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("data").then((data) => {
            globalThis.data = data;
        })
    })

    it('User is able to access sub menu and number of sub menu items', function () {
        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()
        cy.url().should('include', 'inventory')
        landingPage.inventoryItem().should("have.length", data.inventoryTotalItems)
        landingPage.viewAndCheckSubMenu()
    })

    it('User is able to logout and username is empty after logout', function () {
    landingPage.clickLogOut()
    loginPage.username().should("be.empty")
    loginPage.password().should("be.empty")
    })

})
