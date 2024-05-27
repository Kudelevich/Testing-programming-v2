import { By, until } from 'selenium-webdriver';
import Logger from '../core/logger.js';


class ReviewsPage{
    constructor(driver){
        this.driver = driver;
        this.urlReviews='https://ritual.by/about/reviews/';
        this.buttonAddReview=By.css('body > div.page.page_def.page_basket.jsPage > div.page__content > div > article > div > div.l-review.jsLReview > div.l-review__add > div.btn.jsLReview__toggle');
        this.namefield=By.name('form_text_8');
        this.reviewfield=By.name('form_textarea_10');
        this.buttonSend=By.css('body > div.page.page_def.page_basket.jsPage > div.page__content > div > article > div > div.l-review.jsLReview > div.l-review__add > div.l-review__review-form.jsLReview__form > form > div > div.form-contact__field.form-contact__field_footer > input');
    }
    async open() {
        Logger.log(`Открывается страница корзины: ${this.url}`);
        await this.driver.get(this.url);
        Logger.log(`Страница корзины ${this.url} успешно загружена.`);
    }

    async addreview(){
        await this.driver.sleep(2000);
        await this.driver.findElement(this.buttonAddReview).click();
        await this.driver.sleep(2000);
        //await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Ваше имя')]")));
        await namefield.sendKeys('Мария');
        await reviewfield.sendKeys('Отзыв');
        await this.driver.findElement(this.buttonSend).click();
    }

}

export default ReviewsPage