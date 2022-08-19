import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import getRoute  from './routes/index.js';

const app = express();
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', getRoute);
//app.post('/', getRoute);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
    .then(() =>app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)))
    .catch((error) => console.log(error.message));
