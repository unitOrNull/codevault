import Express, { json, NextFunction, Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const PORT = 8000;

// const DB  = open({driver: sqlite3.Database, filename: '/dist/data.db'});
const APP = Express();

APP.get('/', (_req, res) => {
    res.send('ping');
});

function auth(req : Request, res : Response, next : NextFunction) {
    // if(!req.headers['user-agent'].endsWith('i forgor')) { res.status(403).send(); return; }
    // if(req.ip !== '54.39.130.89') { res.status(403).send(); return; }
    next();
}
APP.post('/upload', auth, json(), (req, res) => {
    console.log(req.body);
    res.send();
});
APP.post('/remove', auth, json(), (req, res) => {
    console.log(req.body.id);
    res.send();
});

APP.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});