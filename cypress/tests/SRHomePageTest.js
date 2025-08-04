describe('Books to Scrape Home Page', function () {
    it('Logs all book titles using .each() and .find()', function () {
        // Truy cập vào trang web
        cy.visit('https://books.toscrape.com/');

        // Tìm tất cả các khối chứa thông tin sách (article.product_pod)
        cy.get('article.product_pod').each(($book, index) => {
            // Dùng .find() để tìm phần tử chứa tiêu đề trong mỗi khối
            const title = $book.find('h3 a').attr('title');

            // In tiêu đề sách ra console Cypress
            cy.log(`Book ${index + 1}: ${title}`);
        });
    });

    it('should be able to interact with a component', function() {
        cy.visit('');
        const srHomePage = new SRHomePage();
        srHomePage.heroComponent();
    })

    it('shoule be able to get hero card title', () => {
        cy.visit('');
        new SRHomePage().getHeroCompTitle().then(title => cy.log(title))
    })
});
