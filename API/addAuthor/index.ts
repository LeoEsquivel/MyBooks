import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { IAuthor } from "../interfaces/author.interface";
import authorService from "../services/author.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;

    try {
        const author: IAuthor = req.body;
        const result = await authorService.create(author);
        response = { body: result, status: 200 }
    } catch (error) {
        response = { body: error.message, status: 500 }
    }

    context.res = response;

};

export default httpTrigger;