import express, { json } from "express";
import explorers from "./controller/explorer_controller.js";

const app = express();
const PORT = 3030;

app.use(json());

app.use("/explorers", explorers);

app.listen(PORT, () => {
  console.log(`app listenning on port ${PORT}`);
});
