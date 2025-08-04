import { BookHomePage } from "../models/pages/BookHomePage";

describe('Book Page Test', () => {
    it('Lấy tiêu đề tất cả các cuốn sách và kiểm tra', () => {
        cy.visit('https://books.toscrape.com/');

        const homePage = new BookHomePage(); // ← thêm dòng này

        homePage.getAllBookTitles().then(titles => {
            cy.log('Tất cả tiêu đề sách:', JSON.stringify(titles));

            // expect(titles.length).to.be.greaterThan(0);

            titles.forEach((title, index) => {
                cy.log(`Book ${index + 1}: ${title}`);
            });

            // cy.wrap(titles[1]).should('eq', 'Tipping the Velvet');
        });
    });
});
