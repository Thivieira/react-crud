require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const middlewares = require('./utils/middlewares');
const auth = require('./auth');

const PORT = 9000 || process.env.PORT;
const app = express();

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

app.use(middlewares.ajaxMiddleware);
app.use(middlewares.verifyTokenMiddleware);

app.get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running in http://localhost:${PORT}`);
});
