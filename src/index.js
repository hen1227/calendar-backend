import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { createServer} from 'http';
import authRoutes from './auth/Routes.js';
import calendarRoutes from './calendar/Routes.js';

import sequelize from "./models/Sequelize.js";

let port = process.env.PORT || 4008;
// const corsWhitelist = ['ws://api.henhen1227.com', 'http://localhost:3000', 'http://192.168.40.50:4001', 'http://localhost:4001', 'http://henhen1227.com', 'https://henhen1227.com','http://www.henhen1227.com', 'https://www.henhen1227.com']
const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/calendar', calendarRoutes);

const httpServer = createServer(app);


// MARK: GitHub Webhooks
// On push of a project, pull the latest changes and restart the server

//MARK: MAIN
app.get('/', (req, res) => {
	res.sendFile('/src/index.html', {root:'.'});
});

sequelize.sync({ force: false, alter: true })
    .then(() => {
        console.log('All tables have been successfully created, if they didn\'t already exist');
        // Only start the server after the sync has completed
        httpServer.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    })
    .catch(error => console.log('This error occurred', error));

process.on('exit', function () {
    console.log('About to exit, waiting for remaining connections to complete');
});
