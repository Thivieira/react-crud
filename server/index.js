require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const middlewares = require('./utils/middlewares');
const auth = require('./auth');
const users = require('./users');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());

const whitelist = ['http://localhost:8080'];
const corsOptions = {
  /*   origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  } */
};

app.use(cors(corsOptions));
app.use(express.static('dist'));

app.use('/api/', auth);
app.use('/api/', users);

app.use(middlewares.ajaxMiddleware);
app.use(middlewares.verifyTokenMiddleware);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server running in port ${app.get('port')}`);
});
