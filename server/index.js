import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import loginRoute from './routes/logIn.js';
import signUpRoute from './routes/signUp.js';
import profileRoute from './routes/profile.js';
import forgotPwRoute from './routes/forgotPw.js';

const app = express();
dotenv.config();

// set them to properly send a reqest
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
// route middlewares
app.use('/login', loginRoute);
app.use('/signup', signUpRoute);
app.use('/profile', profileRoute);
app.use('/forgotpassword', forgotPwRoute);

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
