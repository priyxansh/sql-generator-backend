import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generate from "./generate.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
    path: __dirname + "/.env",
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("GG");
});

app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDescription;
    try {
        const sqlQuery = await generate(queryDescription);
        res.json({
            response: sqlQuery,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log("Listening on port:", port);
});
