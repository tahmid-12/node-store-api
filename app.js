require('dotenv').config();

const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');

app.use(errorMiddleware);
app.use(notFound);


const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`)
})

const start = async (req, res) => {
    try{

        app.listen(PORT, console.log(`Server starting at Port ${PORT}...`))
    }catch(error){
        console.log(error)
    }
}

start()