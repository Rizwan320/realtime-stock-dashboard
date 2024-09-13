require("dotenv").config();

import app from "./app";

import "./websocket";


const port = process.env.PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
