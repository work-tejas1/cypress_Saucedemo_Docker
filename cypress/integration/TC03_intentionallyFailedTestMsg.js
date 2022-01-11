/// <reference types="cypress" />
import LoginPage from '../../cypress/support/pageObjects/LoginPage'

describe('Invalid error message intentionally TEST FAIL', () => {
    const loginPage = new LoginPage()

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("invalidData").then((data) => {
            globalThis.data = data;
        })
    })

    it('NEGATIVE Test intentionally fail test case for screenshot ', function () {

        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()
        loginPage.errorMsg(data.invalidErrorMessage)

    })
      

})
