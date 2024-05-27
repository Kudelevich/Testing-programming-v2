import { By } from 'selenium-webdriver';
import Logger from '../core/logger.js';

class CartPage{
    constructor(driver) {
        this.driver=driver;
        this.urlCart= 'https://ritual.by/basket/';
        this.buttonToOrder=By.xpath('/html/body/div[2]/div[2]/div/article/div/div[1]/div[3]/div[2]/div');
        this.buttonSend=By.xpath('//*[@id="popup_orderfull"]/form/div/div[4]/input');
    }
    async open() {
        Logger.log(`Открывается страница корзины: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница корзины ${this.url} успешно загружена.`);
    }

    async GoToOrder(){
        Logger.log(`Оформление заказа`);
        await this.driver.findElement(this.buttonToOrder).click();
    }

    async ToOrder(){
        Logger.log(`Отравить форму`);
        await this.driver.findElement(this.buttonSend).click();
    }
}

export default CartPage;