import { AplicacionFinalTallerPage } from './app.po';

describe('aplicacion-final-taller App', () => {
  let page: AplicacionFinalTallerPage;

  beforeEach(() => {
    page = new AplicacionFinalTallerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
