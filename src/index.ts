import { TotoAPIController } from "toto-api-controller";
import { ControllerConfig } from "./Config";

const api = new TotoAPIController("toto-ms-ex1", new ControllerConfig())

// api.path('POST', '/something', new PostSomething())

api.init().then(() => {
    api.listen()
});