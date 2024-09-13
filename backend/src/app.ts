import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import StockRouter from "./stocks/routes/stocks.routes";

import { errorHandler } from "./middlewares/error.handler";
import { notFound } from "./middlewares/not.found";
import { joiErrorHandler } from "./middlewares/joi.error.handler";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/blockchain", StockRouter);

app.use(notFound);
app.use(joiErrorHandler);
app.use(errorHandler);

export default app;
