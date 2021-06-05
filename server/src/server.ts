import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import cron from 'node-cron';
import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

cron.schedule('0 1 * * *', () => {
    console.log('Running a job at 01:00 at America/Sao_Paulo timezone');
    exec('yarn migrate');

}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

const PORT = process.env.PORT || 3334;

app.listen(PORT, () => console.log('\x1b[32m', `Server is running on port ${PORT}`))