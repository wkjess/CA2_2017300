//const http = require('http');
const path = require('path');
const logger = require('morgan');
//const cors = require('cors');
const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('Connected to database'))
    .catch((err) => console.log(err)); 

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/', indexRoutes);

app.listen(app.get ('port'), ()=>{
    console.log(`Server started on port${app.get('port')}`);
});
