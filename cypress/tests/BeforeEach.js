import DemoBlazePage from "../models/pages/DemoBlazePage";
import { HomePageAPI } from "../support/HomePageAPI";
import product from './product.json';

describe('SR HomePage', () => {
  let apiProduct;

  beforeEach(() => {
    cy.visit("https://demoblaze.com/");
    HomePageAPI.getHomePageProducts().then((items) => {
      apiProduct = items;
    });
  });

  it('should be able to get hero card title', () => {
    // Đảm bảo apiProduct đã được gán trước khi dùng
    cy.wrap(null).then(() => {
      const apiProductData = apiProduct.map(item => {
        return {
          itemName: item.title.replace('\n', ''),
          itemPrice: `$${item.price}`
        };
      });

      new DemoBlazePage().getAllCardData().then(allCardData => {
        expect(allCardData).to.deep.eq(apiProductData);
      });
    });
  });
});
