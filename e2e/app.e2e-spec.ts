import { TgpReportsWebsitePage } from './app.po';

describe('tgp-reports-website App', function() {
  let page: TgpReportsWebsitePage;

  beforeEach(() => {
    page = new TgpReportsWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
