import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
const reporter = require('wdio-reportportal-reporter');

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        reporter.addAttribute({
            "key": "should",
            "value": "pass"
        });
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


