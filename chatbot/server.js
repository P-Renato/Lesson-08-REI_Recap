import express from 'express';
import { handlePrompt } from './utils.js';

const app = express();
app.use(express.json());

app.post('/api/prompt', async function(req,res,next) {
    try {
        const { prompt } = req.body;
        console.log("Prompt recieved: ", prompt);

        const response = await handlePrompt(prompt)
        console.log("LLM response: ", response)

        res.json({reply: response});
    } catch (error) {
        console.error(error);
        res.status(500).json({error : error.message });
    }
});

app.use((req,res,next) =>{
    res.status(404).send('Route is not defined')
});

const port = 5001 || process.env.PORT;
app.listen(port, ()=>console.log("Server is running on Port ", port))