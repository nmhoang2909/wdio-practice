describe("swag test", () => {
  it("should login with valid credentials", async () => {
    browser.url("https://www.saucedemo.com/");
    const username = $("#user-name");
    const password = $("#password");
    const loginBtn = $("#login-button");

    await username.addValue("standard_user");
    await password.addValue("secret_sauce");
    loginBtn.click();

    await expect($(".header_label div")).toHaveText("Swag Labs");
  });
});
