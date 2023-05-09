import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { env } from "process";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response;
    try {
        response = { body: env.MONGO_URI, status: 200 }
    } catch (error) {
        response = { body: error.message, status: 500 };
    }
    context.res = response;

};

export default httpTrigger;