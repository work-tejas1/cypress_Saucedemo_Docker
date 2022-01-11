//  https://www.saucedemo.com/cart.html

class CheckoutPage {

   cancelBtnNotNull() {
      return cy.get("[data-test='cancel']").should("be.visible")
   }

   clickContinue() {
      return cy.get("[data-test='continue']").click()
   }

   clickFinish() {
      return cy.get("[data-test='finish']").click()
   }

   backToProductsNotNull() {
      return cy.get("[data-test='back-to-products']").should("not.be.null")
   }

   verifyThankYouMsg(thankYouMessage) {
      return cy.get(".complete-header").invoke('text').then(($thankYouMsg) => {
         expect($thankYouMsg).contains(thankYouMessage)
      })
   }

   orderComplateMsg(orderCompleteMessage) {
      return cy.get(".complete-text").invoke('text').then(($orderComplete) => {
         expect($orderComplete).contains(orderCompleteMessage)
      })
   }

   postalCodeError() {
      return cy.get("[data-test='error']")
   }


}

export default CheckoutPage;
