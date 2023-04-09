import { run } from "../database/config.database";
import { IAuthor } from "../interfaces/author.interface";
import { Author } from "../models/author.model";

const authorService = {
    init() {
        try {
            run();
        } catch (error) {
            return Error(error);
        }
    },
    async create(author: IAuthor) {
        const author_ = new Author({
            nombre: author.nombre,
            apellidos: author.apellidos
        });
        
        author_.save();
        return author_;
    },
    async read(): Promise<IAuthor[]> {
        const authors = await Author.find();
        return authors;
    }
}

authorService.init();

export default authorService;