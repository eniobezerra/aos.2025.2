import cors from "cors";
import "dotenv/config";
import express from "express";
import { rotaTarefa } from "./routes/index.js";

const app = express();
const port = process.env.PORT ?? 3000
const corsOptions = {
    origin : ["*"]
}

app.listen(port,()=>{
    console.log("O servidor está rodando");
})

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Bem vindo a api de tarefas!!")
})
app.use("/tarefas", rotaTarefa);

export default app;