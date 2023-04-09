import { Schema, Types, model } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title: {type: String, required: true},
    isbn: {type: String, required: true},
    pages_number: {type: Number, required: true, min: 1},
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    editorial: {type: Schema.Types.ObjectId, ref: 'Editorial'}
});

export const Book = model<IBook>('Book', bookSchema);