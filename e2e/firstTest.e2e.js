describe('Test Book App', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    const goToLogin = async () => {
        await expect(element(by.id('SplashScreen'))).toBeVisible();
        await waitFor(element(by.id('LoginScreen'))).toBeVisible().withTimeout(4000);
        await expect(element(by.id('LoginScreen'))).toBeVisible();
    };

    const login = async () => {
        await element(by.id('input-email')).typeText('dzik12@gmail.com');
        await element(by.id('ScrollView')).swipe('up');
        await element(by.id("input-password")).typeText('dzikri12345');
        await element(by.id('ScrollView')).swipe('up');
        await element(by.id('input-password')).tapReturnKey();
        await element(by.id('btn-login')).tap();
        await element(by.id('btn-logout')).tap();
    };

    const register = async () => {
        await element(by.id('input-FullName')).typeText('Dzikri');
        await element(by.id('ScrollView')).swipe('up');
        await element(by.id('input-Email')).typeText('dzik11@gmail.com');
        await element(by.id('ScrollView')).swipe('up');
        await element(by.id('input-Password')).typeText('dzikri12345');
        await element(by.id('input-Password')).tapReturnKey();
        await element(by.id('ScrollView')).swipe('up');
        await element(by.id('button-Register')).tap();
    };

    const successRegister = async () => {
        await element(by.id('button-BackToLogin')).tap();
    };

    describe('Authentication', () => {
        it('should show login screen', async () => {
            await goToLogin();
            await login();
        });
        it('should show register screen', async () => {
            await goToLogin();
            await element(by.id('btn-register')).tap();
            await register();
            await successRegister();
        });
    });
});