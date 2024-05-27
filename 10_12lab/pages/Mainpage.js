import { By } from 'selenium-webdriver';
import Logger from '../core/logger.js';

class MainPage {
    constructor(driver) {
      this.driver =driver;
      this.url='https://ritual.by/';
      this.menu = By.xpath('/html/body/div[2]/div[1]/div[2]');
      this.r_services=By.linkText('Ритуальные услуги');
      this.r_goods=By.linkText('Ритуальные товары');
    }
  
    async open() {
      Logger.log(`Открывается страница: ${this.url}`);
      await this.driver.get(this.url);
      Logger.log(`Страница ${this.url} успешно загружена.`);
  }

  async goToServices(){
    Logger.log(`Переход к услугам`);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.r_services).click();
        Logger.log(`Услуги открыты.`);
  }
  async goToGoods(){
    Logger.log(`Переход к услугам`);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.r_goods).click();
        Logger.log(`Товары открыты.`);
  }
  }
  
  export default MainPage;
