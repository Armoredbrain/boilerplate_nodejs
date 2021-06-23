const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/logger');

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.urlencoded({ extended: false }));

const port = 3000;
app.listen(port, () => logger.info(`Server running on port:${port}...`));
