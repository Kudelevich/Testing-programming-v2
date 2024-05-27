import { By } from 'selenium-webdriver';
import Logger from '../core/logger.js';
import CartPage from './CartPage.js';

class GirlyandaPage{
    constructor(driver){
        this.urlGirlyanda='https://ritual.by/products/garland-in-the-coffin/';
        this.driver=driver;
        this.buttonAddtocard=By.linkText('В КОРЗИНУ');
        this.Cart=By.css('body > div.page.page_def.page_basket.jsPage > div.page__bottom-cart > a')
    }

    async open() {
        Logger.log(`Открывается страница корзины: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница корзины ${this.url} успешно загружена.`);
    }

    async AddToCard(){
        Logger.log(`Добавление в корзину`);
        await this.driver.findElement(this.buttonAddtocard).click();
    }

    async GoToCart(){
        Logger.log(`Переход в корзину`);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.Cart).click();
    }
}

export default GirlyandaPage;