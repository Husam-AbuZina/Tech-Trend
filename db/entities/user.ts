import './config.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

var app = express();

const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

export default app;
