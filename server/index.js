require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./utils/middlewares');
const auth = require('./auth');

const PORT = 9000 || process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use(express.static('dist'));

app.use('/api/', auth);

app.use(middlewares.ajaxMiddleware);
app.use(middlewares.verifyTokenMiddleware);

app.get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running in http://localhost:${PORT}`);
});
