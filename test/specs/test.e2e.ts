import { expect } from "@wdio/globals";
import addRemovePage from "../pageobjects/addRemovePage";

describe("Add/Remove Elements", () => {
  it("should add a new element", async () => {
    await addRemovePage.open();
    await addRemovePage.addElement();

    expect(await addRemovePage.deleteElementButton.getText()).toEqual("Delete");
  });
});
