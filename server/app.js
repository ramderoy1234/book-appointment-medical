import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./database/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// DOTENV CONFIGURATION
dotenv.config();

// DATABASE CONFIGURATION
connectDB();

// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//***** MIDDLEWARE ROUTES *****/
app.use("/auth", userRoutes);
app.use("/admin", adminRoutes);
app.use("/doctor", doctorRoutes);

//******** PORTS AND LISTEN *******/
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode on Port ${port}.`
  );
});
