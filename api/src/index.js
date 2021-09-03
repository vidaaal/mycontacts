const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const router = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors)
app.use(router);
app.use(errorHandler);

app.listen(3001, () => console.log('server started at http://localhost:3001'));
