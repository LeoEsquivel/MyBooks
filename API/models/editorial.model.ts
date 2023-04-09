import { Schema, model } from "mongoose";
import { IEditorial } from "../interfaces/editorial.interface";

const editorialSchema = new Schema<IEditorial>({
    nombre: {type: String, required: true}
});

export const Editorial = model<IEditorial>('Editorial', editorialSchema);