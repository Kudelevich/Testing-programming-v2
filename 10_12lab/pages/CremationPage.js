import { By, until } from 'selenium-webdriver';
import Logger from '../core/logger.js';

class CremationPage {
    constructor(driver) {
      this.driver =driver;
      this.urlCrema='https://ritual.by/ritualnye_uslugi/cremation/';
      this.readReview = By.linkText('Читать все отзывы >>>');
    }
    async open() {
        Logger.log(`Открывается страница каталога: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница каталога ${this.url} успешно загружена.`);
    }
    async goreadAllReviews(){
        Logger.log(`Переход для чтения всех отзывов`);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.readReview).click()
    }
}
export default CremationPage;
