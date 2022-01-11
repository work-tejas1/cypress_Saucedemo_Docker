/// <reference types="cypress" />
import LoginPage from '../../cypress/support/pageObjects/LoginPage'
import LandingPage from '../../cypress/support/pageObjects/LandingPage'
import CartPage from '../../cypress/support/pageObjects/CartPage'
import CheckoutPage from '../../cypress/support/pageObjects/CheckoutPage'

describe('Add Items to cart and place order check order success message', () => {
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

    it('Test Glitch user order place end to end flow', function () {

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
        cy.enterUserDetails(data.firstName, data.lastName, data.postalCode)
        checkoutPage.cancelBtnNotNull()
        checkoutPage.clickContinue()
        cy.checkAmount(data.amountWithoutTax, data.tax, data.total)

        checkoutPage.cancelBtnNotNull()
        checkoutPage.clickFinish()
        checkoutPage.verifyThankYouMsg(data.thankYouMsg)
        checkoutPage.orderComplateMsg(data.orderCompleteMsg)
        checkoutPage.backToProductsNotNull()
    })

})
