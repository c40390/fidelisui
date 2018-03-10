import { FidelisuiPage } from './app.po';

describe('fidelisui App', () => {
  let page: FidelisuiPage;

  beforeEach(() => {
    page = new FidelisuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
