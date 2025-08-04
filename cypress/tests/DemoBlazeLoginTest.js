import { HomePageAPI } from "../support/HomePageAPI";

describe('DemoBlaze Home Page Test', () => {
  let apiProduct;

  beforeEach(() => {
    cy.visit('https://demoblaze.com/');

    HomePageAPI.getHomePageProducts().then((entries) => {
      apiProduct = entries;
    });
  });

  it('should log the product data', () => {
    cy.request({
        url: 'https://api.demoblaze.com/login',
        method: 'POST',
        headers: {
            contentType: "application/json"
        },
        body: {
            username: 'tun', password: btoa('admin')
        }
    }).then(res => {
        const authToken = res.body.split('Auth_token: ')[1]
        cy.log(authToken)
    })
  });
});
