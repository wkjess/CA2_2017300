const http = require('http'),
logger = require('morgan'),
cors = require('cors'), 
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require('dotenv');

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('Connected to database'))
    .catch((err) => console.log(err)); 

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/', indexRoutes);

app.listen(app.get ('port'), ()=>{
    console.log(`Server started on port${app.get('port')}`);
});
