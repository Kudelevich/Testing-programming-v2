import { By, until } from 'selenium-webdriver';
import Logger from '../core/logger.js';


class GoodsPage{
    constructor(driver) {
        this.urlGoods='https://ritual.by/products/';
        this.driver=driver;
        this.girlyanda=By.xpath('/html/body/div[2]/div[2]/div/article/div/div[5]/div[1]/div[11]/a/div[2]/div[1]')
    }
    async open() {
        Logger.log(`Открывается страница корзины: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница корзины ${this.url} успешно загружена.`);
    }
    async GoToGerlyanda(){
        Logger.log(`Переход к гирлянде`);
        await this.driver.findElement(this.girlyanda).click();
    }
}

export default GoodsPage;