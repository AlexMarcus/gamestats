import { GamestatsPage } from './app.po';

describe('gamestats App', () => {
  let page: GamestatsPage;

  beforeEach(() => {
    page = new GamestatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
