import { BookListComponent } from "../components/BookListComponent";

export class BookHomePage {
    // Trả về component hiển thị sách
    bookListComponent() {
        return new BookListComponent(cy.get(BookListComponent.COMP_SEL));
    }

    // Lấy tất cả tiêu đề sách thông qua component
    getAllBookTitles() {
        const list = this.bookListComponent();
        return list.getBookTitles();
    }
}
