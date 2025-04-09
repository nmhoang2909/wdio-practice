import basicAuthPage from "../pageobjects/basic-auth.page";

describe("Available Examples", () => {
  before(async () => {
    await browser.url("https://the-internet.herokuapp.com");
    expect(await browser.getTitle()).toEqual("The Internet");
  });

  it("should do basic login successfully", async () => {
    await basicAuthPage.doAuth("admin", "admin");
    expect(await basicAuthPage.h3Title.getText()).toEqual("Basic Auth");
    expect(await basicAuthPage.pContent.getText()).toEqual(
      "Congratulations! You must have the proper credentials.",
    );
  });
});
