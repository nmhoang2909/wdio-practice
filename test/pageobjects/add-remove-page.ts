import Page from "./page";

class AddRemoveElementPage extends Page {
  get addElementButton() {
    return $("button=Add Element");
  }

  get deleteElementButton() {
    return $("#elements button");
  }

  async open() {
    await super.open("add_remove_elements/");
  }

  async addElement() {
    await this.addElementButton.click();
  }

  async deleteElement() {
    await this.deleteElementButton.click();
  }
}

export default new AddRemoveElementPage();
