import { By } from 'selenium-webdriver';
import Logger from '../core/logger.js';

class R_ServicesPage{
    constructor(driver){
        this.driver = driver;
        this.urlServices='https://ritual.by/ritualnye_uslugi/';
        this.includin_of_funeral=By.xpath('/html/body/div[2]/div[2]/div/article/div/div[6]/div[1]');
        this.cramationLink=By.linkText('Кремация');
    }
    async open() {
        Logger.log(`Открывается страница каталога: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница услуг ${this.url} успешно загружена.`);
    }
    async goToCrem(){
        Logger.log('Открытие страницы кремации');
        
        await this.driver.findElement(this.cramationLink).click();
    }
}

export default R_ServicesPage;
