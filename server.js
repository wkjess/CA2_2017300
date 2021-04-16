const http = require('http'),
logger = require('morgan'),
cors = require('cors'), 
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require('dotenv');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

var app = express();
var port = 8000;
dotenv.config();

const musicRouter = require('./routes/music')

app.listen(3000, () => console.log('Server started'))