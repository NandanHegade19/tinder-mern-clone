/**
 * BACKEND MAIN LOGIC
 */

import express from 'express';
import mongoose from 'mongoose';
import Cards from './bdCards.js';
import Cors from 'cors';


 //App config
const app = express();
const port = process.env.PORT || 8000
const connectionURL = 'mongodb+srv://admin:YtbSrHfWKBDtCwrt@cluster0.26aol.mongodb.net/tinderdb?retryWrites=true&w=majority'

 //middleware
app.use(express.json())
app.use(Cors());


 //DB config
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

 //API endpoints
 //test
app.get('/', (request, response) => response.status(200).send("Hello World from API")); //200 is all ok

//push data into nosql-db
app.post('/tinder/cards', (request, response) => {
    const dbCard = request.body;
    Cards.create(dbCard, (err, data) => {
        if(err){
            response.status(500).send(err)
        }else{
            response.status(201).send(data)
        }
    }) //creates new doc
})

app.get('/tinder/cards', (request, response) => {
    Cards.find((err, data) => {
        if(err){
            response.status(500).send(err)
        }else{
            response.status(201).send(data)
        }
    })
})
 //Listener
 app.listen(port, () => console.log(`Listening on locolhost: port ${port}`));