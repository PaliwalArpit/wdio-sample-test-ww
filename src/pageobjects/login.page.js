const Page = require('./basic.page');
const data = require('../../data.json')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get loginUsername() { return $('[name="email"]')}
    get loginPassword() { return $('[name="password"]')}
    get loginButton() { return $('button[data-testid="login-button"]');}
    get registerButton() { return $('[data-testid="login_reg_submit_btn"]');}
    get loggedInIcon() { return $('[data-testid="one-header-icon-my-account"]');}
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(){
        this.loginButton.waitForClickable({ timeout: 80000 });
        this.loginButton.click();
        this.loginUsername.waitForDisplayed({ timeout: 80000 });
        this.loginUsername.setValue(data.username);
        this.loginPassword.setValue(data.password);
        this.registerButton.click();
    }
}

module.exports = new LoginPage();
