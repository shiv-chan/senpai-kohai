import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import loginRoute from './routes/logIn.js';
import signUpRoute from './routes/signUp.js';
import profileRoute from './routes/profile.js';
import forgotPwRoute from './routes/forgotPw.js';
import authorizationRoute from './routes/authorization.js';
import usersRoute from './routes/users.js';

const app = express();
dotenv.config();

// set them to properly send a reqest
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/login', loginRoute);
app.use('/signup', signUpRoute);
app.use('/profile', profileRoute);
app.use('/authorization', authorizationRoute);
app.use('/users', usersRoute);
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
