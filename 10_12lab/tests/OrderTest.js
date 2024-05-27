import MainPage from "../pages/Mainpage.js";
import GoodsPage from "../pages/GoodsPage.js";
import GirlyandaPage from "../pages/GirlyandaPage.js";
import CartPage from "../pages/CartPage.js";
import Logger from '../core/logger.js';
import BrowserManager from '../core/browserManager.js';


async function OrderTest(){
    const driver = await BrowserManager.getDriver();
    try {
        const mainpage = new MainPage(driver);
        const goodspage = new GoodsPage(driver);
        const girlyandapage = new GirlyandaPage(driver);
        const cartpage = new CartPage(driver);

        await mainpage.open();
        await mainpage.goToGoods();

        await goodspage.GoToGerlyanda();

        await girlyandapage.AddToCard();
        await cartpage.GoToOrder();
        await cartpage.ToOrder();

    } catch (error) {
        Logger.error(`Ошибка: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

OrderTest()