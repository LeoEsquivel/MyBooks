import { Types } from "mongoose";


export interface IBook {
    title: string;
    isbn: string;
    pages_number: number;
    author: Types.ObjectId;
    editorial: Types.ObjectId;

}