import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (req, res) => {
    try {
        const fileBuf = await fs.readFile("./index.html");
        res.type("html");
        res.send(fileBuf);
    } catch (err) {
        res.status(404).end();
    }
});

app.get("/*", async (req, res) => {
    try {
        const fileName = req.path;
        const fileType = fileName.split(".")[1];
        const fileBuf = await fs.readFile(`./${fileName}`);
        res.type(fileType);
        res.send(fileBuf);
    } catch (err) {
        res.status(404).end();
    }
});

app.use("/*", (req, res) => {
    res.status(405).end();
});

app.listen(5080);