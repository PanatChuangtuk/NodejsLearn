const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.send('Hello Con');
});

app.listen(port, () => {
  console.log('Confuse on port : ' + chalk.red(port));
});
