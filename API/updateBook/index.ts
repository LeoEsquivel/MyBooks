import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { IBook } from "../interfaces/book.interface";
import bookService from "../services/book.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;

    try {
        const id = req.params.id;
        const book:IBook = req.body;
        const result = await bookService.update(id, book);
        response = { body: result, status: 200 };
    } catch (error) {
        response = { body: error.message, status: 500 };
        
    }

    context.res = response;
};

export default httpTrigger;