//  https://www.saucedemo.com/

class LoginPage {

   username() {
      return cy.get("#user-name")
   }

   password() {
      return cy.get("[data-test='password']")
   }

   clickLoginButton() {
      return cy.get("[data-test='login-button']").click({ timeout: 10000 })
   }

   errorMsg(errorMessage) {
      return cy.get("[data-test='error']").invoke('text').then(($errorMsg) => {
         expect($errorMsg).contains(errorMessage)
      })
   }

}

export default LoginPage;
