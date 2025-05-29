const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const connectToMongoDB = require('./connection');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors("http://localhost:5173")); // Allow requests from the frontend

const PORT = process.env.PORT || 8000;

connectToMongoDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/" ,(_,res) => {
    res.send("ecommerce Server is up and running")
})

app.use("/api/products" , productsRouter);

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));