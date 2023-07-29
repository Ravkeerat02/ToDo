//imports the necessary packages
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');



dotenv.config();


const app = express();

//Configure the app
app.get('/', (req, res) => {
    res.send('To DO');
});

app.listen(8080);



