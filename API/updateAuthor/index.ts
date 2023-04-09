import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import authorService from "../services/author.service";
import { IAuthor } from "../interfaces/author.interface";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;
    try {
        const id = req.params.id;
        const author:IAuthor = req.body;
        const result = await authorService.update(id, author);
        response = { body: result, status: 200 };
    } catch (error) {
        response = { body: error.message, status: 500 }
    }
    context.res =  response;
};

export default httpTrigger;