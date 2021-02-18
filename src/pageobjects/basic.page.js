/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class BasicPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   get searchField() { return $('[data-testid=search-input]');}
   get productList() { return $('//div[contains(@class,"ProductGrid__StyledGrid")]');}
   get wishListIcons() { return $('[data-testid="wishlist-icon"]:nth-child(1)');}
    get acceptCookies() { return $('#onetrust-accept-btn-handler');}
  get selectedWishListIcon() { return $('[data-is-selected=true]');}
    get wishListCounter() { return $('[data-testid=wishlist-counter]')}
    get wishListPage() { return $('#wishlistRoot');}
    get deletWishListProduct() { return $('[class="blockListProduct__delete qaBlockListProduct__delete"]');}
    get emptyWishList() { return $('[class="icon icon-wishlist wishlistNoProducts__icon"]');}

    open() {
        return browser.url(`​https://www.westwingnow.de`);
    }
    clickAcceptCookies(){
        this.acceptCookies.waitForClickable({ timeout: 80000 });
        this.acceptCookies.click();
    }

    searchProduct(){
        this.searchField.waitForDisplayed({ timeout: 80000 });
        this.searchField.setValue('möbel');
    }

    clickFirstWishListIcon(){
        this.wishListIcons.waitForClickable({ timeout: 80000 });
        this.wishListIcons.click();
    }

    openWishListPage(){
        this.wishListCounter.waitForClickable({ timeout: 80000 });
        this.wishListCounter.click();
    }

}

module.exports = new BasicPage();

