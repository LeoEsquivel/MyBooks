import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { IEditorial } from "../interfaces/editorial.interface";
import editorialService from "../services/editorial.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;

    try {
        const editorial: IEditorial = req.body;
        const result = await editorialService.create(editorial);
        response = { body: result, status: 200 };
    } catch (error) {
        response = { body: error.message, status: 500 };
    }
    context.res = response;

};

export default httpTrigger;