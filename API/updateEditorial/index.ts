import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import editorialService from "../services/editorial.service";
import { IEditorial } from "../interfaces/editorial.interface";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;

    try {
        
        const id = req.params.id;
        const editorial: IEditorial = req.body;
        const result = await editorialService.update(id, editorial);
        response = { body: result, status: 200 };    
    } catch (error) {
        response = { body: error.message, status: 500 };    
    }
    context.res = response;
};

export default httpTrigger;