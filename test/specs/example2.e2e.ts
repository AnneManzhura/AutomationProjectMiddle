import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
const reporter = require('wdio-reportportal-reporter');


//to RUN: npx test run ./test/wdio.conf.ts
describe('My Login application', () => {


    it('should login with valid credentials', async () => {
        reporter.addAttribute({
            "key": "should",
            "value": "fail"
        });
        await LoginPage.open();

        await LoginPage.login('tomsmits', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});
