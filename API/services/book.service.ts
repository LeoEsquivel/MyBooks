import { run } from "../database/config.database"
import { IBook } from "../interfaces/book.interface";
import { Book } from "../models/book.model";

const bookService = {
    init() {
        try {
            run();
        } catch (error) {
            return Error(error);
        }
    },
    async create(book: IBook) {
        const book_ = new Book({
            title: book.title,
            isbn: book.isbn,
            pages_number: book.pages_number,
            author: book.author,
            editorial: book.editorial
        });
        book_.save();
        return book_;
    },
    async read(): Promise<IBook[]> {
        const books = Book.find().populate('author').populate('editorial');
        return books;
    },
    async update(id:string, book:IBook) {
        await Book.findByIdAndUpdate(id, book, { new: true });
        return "Libro actualizado";
    },
    async delete(id:string) {
        await Book.findByIdAndDelete(id);
        return "Libro eliminado";
    }
}

bookService.init();

export default bookService;