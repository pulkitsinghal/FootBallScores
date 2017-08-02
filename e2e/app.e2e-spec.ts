import { FootballWorldPage } from './app.po';

describe('football-world App', () => {
  let page: FootballWorldPage;

  beforeEach(() => {
    page = new FootballWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
