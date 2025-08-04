describe('Learn about each and find methods with books.toscrape.com', function () {
    it('should log each book title', function () {
        cy.visit('https://books.toscrape.com/');

        // cy.get('article.product_pod').each(($el, index) => {
        //     // Dùng .find() để tìm thẻ <a> chứa title
        //     const title = $el.find('h3 a').attr('title');
        //     cy.log(`Book ${index + 1}: ${title}`);
        // });

        // cy.get('article.product_pod').each(($card, index) => {
        //     cy.wrap($card).within(() => {
        //         cy.get('h3 a')
        //             .invoke('attr', 'title')
        //             .then((title) => {
        //                 cy.log(`Book ${index + 1}: ${title}`);
        //             });
        //     });
        // });

        cy.get('section').find('article.product_pod').each(($el, index) => {
            const title = $el.find('h3 a').attr('title');
            cy.log(`Book ${index + 1}: ${title}`);
        
        });
    });
});
