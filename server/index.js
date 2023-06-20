import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

mongoose.set('strictQuery', true);

const CONNECTION_URL = 'mongodb+srv://harmeet:vs89KR0IMfCIrLpo@cluster0.2vojwp0.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

   

