const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use('/api/posts', require('./routes/postRoutes'))

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`)
    }
    console.log(`Server is running on port: ${[port]}`)
})