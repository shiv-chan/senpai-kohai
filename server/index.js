import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import loginRoute from "./routes/logIn.js";
import signUpRoute from "./routes/signUp.js";

const app = express();
dotenv.config();

// set them to properly send a reqest
app.use(bodyParser.json({ limits: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limits: "30mb", extended: true }));
app.use(cors());
app.use("/login", loginRoute);
app.use("/signup", signUpRoute);

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000; // for Heroku?

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
