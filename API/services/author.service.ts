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
    },
    async update(id:string, author: IAuthor) {
        await Author.findByIdAndUpdate(id, author, { new: true });
        return "Autor actualizado."
    },
    async delete(id:string) {
        await Author.findByIdAndDelete(id);
        return "Autor eliminado."
    }
}

authorService.init();

export default authorService;