export class BookListComponent {
    static COMP_SEL = '.row .col-sm-8'; // phần chứa sách

    constructor(component) {
        this.component = component; // nhận phần tử chứa sách
    }

    // Lấy ra tất cả các cuốn sách
    get allBooks() {
        return this.component.find('article.product_pod');
    }

    // Lấy ra tiêu đề của từng cuốn sách
    getBookTitles() {
        const titles = [];
        this.allBooks.each(($book) => {
            const title = $book.find('h3 a').attr('title');
            titles.push(title);
        });
        return new Cypress.Promise(resolve => resolve(titles));
    }
}
