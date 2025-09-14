import dotenv from 'dotenv'

dotenv.config();

import {appRouter} from "./routes/appRoute.js";
import express from 'express';
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'https://linkapp.tech'
}))
app.use(appRouter);

app.use(errorMiddleware)

const start = () => {
    try {
        app.listen(3000, () => console.log('Server started on port 3000'));
    } catch (e) {
        console.error(e);
    }
}

start();


