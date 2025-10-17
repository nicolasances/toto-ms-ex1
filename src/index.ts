import { TotoAPIController } from "toto-api-controller";
import { ControllerConfig } from "./Config";
import { SayHello } from "./dlg/Hello";
import { Smoke } from "./dlg/Smoke";

const api = new TotoAPIController("toto-ms-ex1", new ControllerConfig())

api.path('GET', '/health', new Smoke(), { noAuth: true, contentType: 'application/json' });

api.path('GET', '/ex1/hello', new SayHello());

api.init().then(() => {
    api.listen()
});