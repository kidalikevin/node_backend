import express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from '../routes/routes';
import cors = require('cors');
import mongoose = require('mongoose');
import env from 'dotenv';

env.config();

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.PROD_BASE_URL}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB}`;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useCreateIndex: true });
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());

        this.app.use((req, res, next) => {
           res.header('Access-Control-Allow-Origin', '*');
           res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
           res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
           next();
        });
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
