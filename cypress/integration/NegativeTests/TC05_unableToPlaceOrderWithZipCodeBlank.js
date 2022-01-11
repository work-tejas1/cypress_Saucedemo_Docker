/// <reference types="cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import LandingPage from '../../support/pageObjects/LandingPage'
import CartPage from '../../support/pageObjects/CartPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe('User is not able to checkout when User info is empty', () => {
    const loginPage = new LoginPage()
    const landingPage = new LandingPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
        cy.fixture("data").then((data) => {
            globalThis.data = data;
        })
    })

    it('Test Glitch user with empty user info error', function () {

        loginPage.username().type(data.username).should("have.value", data.username)
        loginPage.password().type(data.password, { log: false })
        loginPage.clickLoginButton()

        cy.url().should('include', 'inventory')
        landingPage.inventoryItem().should("have.length", data.inventoryTotalItems)
        data.productNames.forEach(function (element) {
            cy.addProductToBasket(element)
        })
        landingPage.cartItemCount().invoke('text').then(($cartItemCount) => {
            expect($cartItemCount).contains(data.cartItemCount)
        })
        landingPage.clickShoppingCart()

        cy.url().should('include', 'cart')
        cartPage.cartItems().should("have.length", data.cartItemCount)
        cartPage.cartItemName().each((item, index, list) => {
            cy.wrap(item).should("contain.text", data.productNames[index])
        })
        cartPage.continueShopping().should("not.be.null")
        cartPage.clickCheckout()

        cy.url().should('include', 'checkout-step-one')
        checkoutPage.cancelBtnNotNull()
        checkoutPage.clickContinue()
        checkoutPage.postalCodeError().invoke('text').then(($emptyFiledError) => {
            expect($emptyFiledError).contains(data.firstNameErrorMsg)
        })
    })

})
