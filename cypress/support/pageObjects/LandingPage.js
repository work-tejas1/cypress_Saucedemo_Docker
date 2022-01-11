//  https://www.saucedemo.com/inventory.html

class LandingPage {

   inventoryItem() {
      return cy.get(".inventory_item")
   }

   inventoryItemName() {
      return cy.get(".inventory_item_name")
   }

   cartItemCount() {
      return cy.get(".shopping_cart_badge")
   }

   clickShoppingCart() {
      return cy.get("#shopping_cart_container").click()
   }

   sortProducts() {
      return cy.get('[data-test="product_sort_container"]')
   }

   viewAndCheckSubMenu() {
      return cy.get("#react-burger-menu-btn").click().then(() => {
         cy.get(".bm-item-list a").should("have.length", 4)
      })
   }

   clickLogOut() {
      return cy.get("#logout_sidebar_link").click({ timeout: 10000 })
   }


}

export default LandingPage;
