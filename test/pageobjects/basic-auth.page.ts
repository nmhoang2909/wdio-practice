import Page from "./page";

class BasicAuth extends Page {
  async doAuth(username: string, password: string): Promise<void> {
    await browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`,
    );
  }

  get h3Title() {
    return $("#content h3");
  }

  get pContent() {
    return $("#content p");
  }
}

export default new BasicAuth();
