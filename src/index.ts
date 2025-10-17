import { TotoAPIController } from "toto-api-controller";
import { ControllerConfig } from "./Config";
import { SayHello } from "./dlg/Hello";

const api = new TotoAPIController("toto-ms-ex1", new ControllerConfig())

api.path('GET', '/ex1/hello', new SayHello());

api.init().then(() => {
    api.listen()
});