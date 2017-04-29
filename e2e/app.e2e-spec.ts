import { DlteProjectPage } from './app.po';

describe('dlte-project App', () => {
  let page: DlteProjectPage;

  beforeEach(() => {
    page = new DlteProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dlte works!');
  });
});
