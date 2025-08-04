import DemoBlazePage from "../models/pages/DemoBlazePage";
import product from './product.json';

describe('SR Home Page', () => {
  const PRODUCT_DATA = [
    { itemName: "Samsung galaxy s6", itemPrice: "$360" },
    { itemName: "Nokia lumia 1520", itemPrice: "$820" },
    { itemName: "Nexus 6", itemPrice: "$650" },
    { itemName: "Samsung galaxy s7", itemPrice: "$800" },
    { itemName: "Iphone 6 32gb", itemPrice: "$790" },
    { itemName: "Sony xperia z5", itemPrice: "$320" },
    { itemName: "HTC One M9", itemPrice: "$700" },
    { itemName: "Sony vaio i5", itemPrice: "$790" },
    { itemName: "Sony vaio i7", itemPrice: "$790" }
  ];

  it('should be able to get hero card title', () => {
    cy.visit("https://demoblaze.com/");
    new DemoBlazePage().getAllCardData().then(allCardData => {
      cy.wrap('').then(() => {
        // cy.log(JSON.stringify(allCardData))
        expect(allCardData).to.be.deep.eq(product);
      });
    });
  });

  it.only('should be able to get hero card title from API', () => {
    cy.visit("https://demoblaze.com/");
    // Intercept default homepage products
    cy.intercept('/entries').as('entries');
    cy.wait('@entries');

    cy.get('@entries').then(entries => {
      let apiProductData = entries.response.body.Items;

      apiProductData = apiProductData.map(item => {
        return {
          itemName: item.title.replace('\n', ''),
          itemPrice: `$${item.price}`
        };
      });

      new DemoBlazePage().getAllCardData().then(allCardData => {
        cy.wrap('').then(() => {
          expect(allCardData).to.be.deep.eq(apiProductData);
        });
      });
    });
  });
});
