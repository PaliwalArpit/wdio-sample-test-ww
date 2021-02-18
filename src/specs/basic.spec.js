const BasicTest = require('../pageobjects/basic.page.js');
const Login = require('../pageobjects/login.page');
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('​https://www.westwingnow.de');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('WestwingNow');
        BasicTest.clickAcceptCookies();
    });

    it('I search for möbel', ()=> {
        expect(browser).toBeTruthy(BasicTest.searchProduct());
        browser.keys(['Meta', 'Enter'])
    });

    it('Then I should see product listing page with a list of products', ()=> {
        expect(BasicTest.productList).toBePresent();
    });

    it('When I click on wishlist icon of the first found product',()=>{
        expect(BasicTest.wishListIcons).toBeClickable();
        BasicTest.clickFirstWishListIcon();
    });

    it('When I switch to login form of the overlay',()=>{
        expect(Login.loginUsername).toBePresent();
    });

    it('And I log in with "​your_test_account_data (see the note below)​"credentials',()=>{
        Login.login();
        expect(Login.loggedInIcon).toBePresent();
    });

    it('Then the product should be added to the wishlist (wishlist icon on the product is filled in and wishlist counter in the website header',()=>{
        expect(BasicTest.selectedWishListIcon).toBePresent();
        expect(BasicTest.wishListCounter).toBePresent();
    });

    it('And I go to the wishlist page',()=>{
        expect(BasicTest.wishListCounter).toBeClickable();
        BasicTest.openWishListPage();
        expect(BasicTest.wishListPage).toBePresent();
    });

    it('And I delete the product from my wishlist',()=>{
        expect(BasicTest.deletWishListProduct).toBeClickable();
        BasicTest.deletWishListProduct.click();
        expect(BasicTest.emptyWishList).toBePresent();
    })
})