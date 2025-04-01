export default class Page {
  constructor() {}

  public get addRemoveElements() {
    return $("Add/Remove Elements");
  }

  async open(path: string) {
    await browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  public async gotoAddRemoveElements() {
    await this.addRemoveElements.click();
  }
}
