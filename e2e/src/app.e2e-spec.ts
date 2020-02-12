import { AppPage } from './app.po';
import { browser, logging, By, WebElement } from 'protractor';

const ONE_SECOND: number = 1000;
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('ng-jasmine-spy-tests');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Google Demo', function() {
  it('Should Search', function() {
    browser.driver.get('http://google.com/');
    browser.driver.findElement(By.name('q')).sendKeys('please work');
    browser.sleep(ONE_SECOND);
    browser.driver.findElement(By.className('gNO89b')).click();
    browser.sleep(ONE_SECOND);
    browser.driver.findElements(By.className('HF9Klc')).then((elements: Array<WebElement>) => {
      elements[1].click();
      browser.sleep(ONE_SECOND);
    });
  });
});
