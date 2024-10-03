import express from "express";
import * as db from "./handledb.js";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/results', async (req, res)=>{
    const resultData = await db.getResultScore();
    res.json(resultData);
})

app.post('/results', async (req, res) => {
    
    await db.addScore(req.body);
    const resultData = await db.getResultScore();
    res.json(resultData);

})

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});