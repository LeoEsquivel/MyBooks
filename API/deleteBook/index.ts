import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import bookService from "../services/book.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;
    
    try {
        const id = req.params.id;
        const result = await bookService.delete(id);
        response = { body: result, status: 200 };
    } catch (error) {
        response = { body: error.message, status: 500 };
    }

    context.res = response;
};

export default httpTrigger;