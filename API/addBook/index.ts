import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { IBook } from "../interfaces/book.interface";
import { Book } from "../models/book.model";
import bookService from "../services/book.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;

    try {
        const book: IBook = req.body;
        const result = await bookService.create(book);
        response = { body: result, status: 200 };
    } catch (error) {
        response = { body: error.message, status: 500 };
    }

    context.res = response;
};

export default httpTrigger;