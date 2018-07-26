const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser middleware

app.use(bodyParser.json());

//DB Config
const db  = require('./config/keys').uri;

//Connect to mongo
mongoose.connect(db, {useNewUrlParser:true})
        .then(()=>{
            console.log('MongoDb Connected')
        })
        .catch(err=>console.log(err));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})