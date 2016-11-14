import express        from "express";
import Fetchr         from "fetchr";

import CounterService from "src/services/CounterService";

const fetchrMiddleware = express();

Fetchr.registerService(CounterService);

fetchrMiddleware.use("/api", Fetchr.middleware());

export default fetchrMiddleware;
