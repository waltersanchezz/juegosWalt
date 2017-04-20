import { JuegoswalterPage } from './app.po';

describe('juegoswalter App', function() {
  let page: JuegoswalterPage;

  beforeEach(() => {
    page = new JuegoswalterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
