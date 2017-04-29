import { browser, element, by } from 'protractor';

export class DlteProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dlte-root h1')).getText();
  }
}
