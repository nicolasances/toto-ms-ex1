import { TotoAPIController } from "toto-api-controller";
import { ControllerConfig } from "./Config";
import { SayHello } from "./dlg/Hello";

const api = new TotoAPIController("toto-ms-ex1", new ControllerConfig(), { basePath: '/ex1' });

api.path('GET', '/hello', new SayHello());

api.init().then(() => {
    api.listen();
});