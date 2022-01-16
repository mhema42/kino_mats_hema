import express from "express";
import fs from "fs/promises";

const app = express();

async function loadHeader() {
    const headerBuf = await fs.readFile("./src/templates/header.html");
    const headerText = headerBuf.toString();
    return headerText;
}

async function loadfooter() {
    const headerBuf = await fs.readFile("./src/templates/footer.html");
    const headerText = headerBuf.toString();
    return headerText;
}

app.get("/", async (req, res) => {
    try {
        const headerText = await loadHeader();
        const footerText = await loadfooter();
        const htmlBuf = await fs.readFile("./index.html");
        const htmlText = htmlBuf.toString().replace("%header%", headerText).replace("%footer%", footerText);
        res.send(htmlText);
    } catch (err) {
        res.status(404).end();
    }
});

app.get("/about", async (req, res) => {
    try {
        const headerText = await loadHeader();
        const footerText = await loadfooter();
        const htmlBuf = await fs.readFile("./about.html");
        const htmlText = htmlBuf.toString().replace("%header%", headerText).replace("%footer%", footerText);;
        res.send(htmlText);
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