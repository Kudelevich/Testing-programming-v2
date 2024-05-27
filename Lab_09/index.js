const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  // Инициализация драйвера Selenium
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Шаг 1: Открыть сайт ritual.by
    await driver.get('https://ritual.by/');

    // Шаг 2: На главной странице выбрать в меню "Ритуальные услуги"
    await driver.findElement(By.linkText('Ритуальные услуги')).click();

    // Шаг 3: Нажать на "Кремация"
    const kremaciyaLink = await driver.findElement(By.css('body > div.page.page_def.page_basket.jsPage > div.page__content > div > article > div > div.l-section-item.l-section-item_ > div.l-section-item__list > div:nth-child(3) > a > div.section-item__content > div.section-item__title'));
    await kremaciyaLink.click();


    // Шаг 4: Прокрутить вниз страницы до раздела "Отзывы"
    const readreview = await driver.findElement(By.linkText('Читать все отзывы >>>'));
    await readreview.click();

    // Шаг 4: Нажать на кнопку "Добавить отзыв"
    const addreview = await driver.findElement(By.css('body > div.page.page_def.page_basket.jsPage > div.page__content > div > article > div > div.l-review.jsLReview > div.l-review__add > div.btn.jsLReview__toggle'));
    await addreview.click();

    // Шаг 5: Ввести в поля свое имя и отзыв
    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Ваше имя')]")));

    // Шаг 6: Ввести в поле имя "Мария"
    const nameField = await driver.findElement(By.name('form_text_8'));
    await nameField.sendKeys('Мария');
    await driver.findElement(By.name('form_textarea_10')).sendKeys('Ваш отзыв');

    // Шаг 6: Нажать кнопку "Отправить"
    await driver.findElement(By.css('body > div.page.page_def.page_basket.jsPage > div.page__content > div > article > div > div.l-review.jsLReview > div.l-review__add > div.l-review__review-form.jsLReview__form > form > div > div.form-contact__field.form-contact__field_footer > input')).click();

    // Дополнительный шаг (не указан в описании теста): Проверить успешность отправки отзыва
    /*const successMessage = await driver.findElement(By.className('success-message')).getText();
    console.log('Отправка отзыва успешно завершена:', successMessage);*/
  } 
  finally {
    // Закрыть драйвер после завершения теста
    
  }
}

runTest();