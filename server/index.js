const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const connectToMongoDB = require('./connection');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');
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

app.use(notFound);
app.use(errorHandler);

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));