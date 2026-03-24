const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");
const authRouter = require("./routes/auth");
const orderRouter = require("./routes/order");
const stripeRouter = require('./routes/stripe');
const connectToMongoDB = require("./connection");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

const allowedOrigins = [
  "https://shopease-ewbs.onrender.com",
  "https://shopease-ealb.onrender.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser or same-origin requests without an Origin header.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE" , "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
  })
);

const PORT = process.env.PORT || 8000;

connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("ecommerce Server is up and running");
});

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/orders", orderRouter);
app.use("/api/stripe", stripeRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0' , () => console.log(`Server is running on port ${PORT}`));
