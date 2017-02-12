import { MathPlaygroundPage } from './app.po';

describe('math-playground App', function() {
  let page: MathPlaygroundPage;

  beforeEach(() => {
    page = new MathPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
