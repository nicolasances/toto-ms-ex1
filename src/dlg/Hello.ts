import { Request } from "express";
import { ExecutionContext, TotoDelegate, UserContext } from "toto-api-controller";

/**
 * API to generate flashcards for a given content. 
 */
export class SayHello implements TotoDelegate {

    async do(req: Request, userContext: UserContext, execContext: ExecutionContext): Promise<any> {

        return { message: "Hello World!" }

    }

}