class AutoStore_Homepage_PO {

    accessHomepage(){
        cy.visit("https://automationteststore.com/");
    };

    clickOn_MenuOption(menu){
        cy.get("a[href*='product/category&path=']").contains(menu).click();
    };
  
};

export default AutoStore_Homepage_PO;