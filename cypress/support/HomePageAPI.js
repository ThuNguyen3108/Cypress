export class HomePageAPI {
  static getHomePageProducts() {
    return cy.intercept('/entries').as('entries')
      .wait('@entries')
      .then((interception) => {
        return interception.response.body.Items;
      });
  }
}
