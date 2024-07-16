import express from "express"
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

import cors from 'cors';

//configure env
dotenv.config();

//connection
connectDB();


//rest object 
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//get api
app.get("/", (_req, res) => {
    res.send("<h1>Welcome to My Ecommerce App  APP</h1>")
})

//PORT
const PORT = process.env.PORT || 8000;

//run
app.listen(PORT, () => {
    console.log(`Server Running In ${process.env.DEV_MODE}  mode on port no ${PORT}`.bgYellow.black);
})