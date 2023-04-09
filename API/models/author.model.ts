import { Schema, model } from "mongoose";
import { IAuthor } from "../interfaces/author.interface";

const authorSchema = new Schema<IAuthor>({
    nombre: {type: String, required: true },
    apellidos: {type: String, required: true}
});

export const Author = model<IAuthor>('Author', authorSchema);