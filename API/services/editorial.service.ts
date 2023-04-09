import { run } from "../database/config.database"
import { IEditorial } from "../interfaces/editorial.interface";
import { Editorial } from "../models/editorial.model";

const editorialService = {
    init() {
        try {
            run();
        } catch (error) {
            return Error(error);
        }
    },
    async create(editorial:IEditorial) {
        const editorial_ = new Editorial({
            nombre: editorial.nombre
        });
        editorial_.save()
        return editorial_
    },
    async read(): Promise<IEditorial[]> {
        const editoriales  = await Editorial.find();
        return editoriales;
    },
    async update(id:string, editorial: IEditorial) {
        await Editorial.findByIdAndUpdate(id, editorial, { new: true });
        return "Editorial actualizada."
    },
    async delete(id:string) {
        await Editorial.findByIdAndDelete(id);
        return "Editorial eliminada."
    }
}

editorialService.init();

export default editorialService;