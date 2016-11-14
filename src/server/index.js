import express              from "express";

import libraryMiddleware    from "src/server/libraryMiddleware";
import fetchrMiddleware     from "src/server/fetchrMiddleware";
import reduxAppMiddleware   from "src/server/reduxAppMiddleware";

const app = express();

app.use(libraryMiddleware);
app.use(fetchrMiddleware);
app.use(reduxAppMiddleware);

const port = process.env.PORT || 3000;
app.listen(port);

console.log("Listening on port %s.", port);
