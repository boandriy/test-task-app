import express from "express"
import cors from "express"
import router from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

export default app;
