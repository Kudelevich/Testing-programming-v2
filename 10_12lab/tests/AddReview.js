import MainPage from '../pages/Mainpage.js';
import R_ServicesPage from '../pages/RittualSerPage.js';
import ReviewsPage from '../pages/ReviewsPage.js';
import CremationPage from '../pages/CremationPage.js';
import Logger from '../core/logger.js';
import BrowserManager from '../core/browserManager.js';

async function AddReview(){
    const driver = await BrowserManager.getDriver();
    try {
        const mainpage = new MainPage(driver);
        const r_servicepage = new R_ServicesPage(driver);
        const cremationpage = new CremationPage(driver);
        const reviewpage = new ReviewsPage(driver);

        await mainpage.open();
        await mainpage.goToServices();

        await r_servicepage.goToCrem();

        await cremationpage.goreadAllReviews();

        await reviewpage.addreview();
    }catch (error) {
        Logger.error(`Ошибка: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

AddReview();