import express from "express";

const app = express();
const port = process.env.PORT || 8500;

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello Welcome to the backend!");
})

const server = app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})