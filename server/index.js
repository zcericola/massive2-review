//dependencies
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controllers/dogCtrl');

//server port
const port = 3002;
//creates instance of express server
const app = express();

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set("dbInstance", db);
}).catch(err => {
    console.log(err);
});

//MiddleWares
app.use(cors());
app.use(json());

//endpoints
app.get('/api/getdogs', controller.getDogs );
app.post('/api/adddog', controller.addDog);
//Checking that server is running
app.listen(port, () => {
console.log('Avast ye scurvy dogs! We be pulling into port ' + port);
});

