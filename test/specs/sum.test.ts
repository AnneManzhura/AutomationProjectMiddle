import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

describe('My Login application', () => {

    test('adds 1 + 2 to equal 3', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmits', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});
