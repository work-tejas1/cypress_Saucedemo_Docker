/// <reference types="cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'

describe('Test invalid username and password message', () => {
    const loginPage = new LoginPage()

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("invalidData").then((data) => {
            globalThis.data = data;
        })
    })

    it('NEGATIVE Test invalid user details message check ', function () {

        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()
        loginPage.errorMsg(data.errorMessage)

    })
      

})
