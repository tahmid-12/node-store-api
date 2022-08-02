require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const errorMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const productsRouter  = require('./routes/products');

app.use(express.json());

app.use('/api/v1/products', productsRouter);

app.use(errorMiddleware);
app.use(notFound);


const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`)
})

const start = async (req, res) => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server starting at Port ${PORT}...`);
        })
    }catch(error){
        console.log(error)
    }
}

start()