const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const connectToMongoDB = require('./connection');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true, 
}));

const PORT = process.env.PORT || 8000;

connectToMongoDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/" ,(_,res) => {
    res.send("ecommerce Server is up and running")
})

app.use("/api/products" , productsRouter);
app.use("/api/auth" , authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));