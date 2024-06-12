const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require('./src/views/router/productsRouter');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.render('index', {
    username: 'Panat',
    customer: ['puai', 'na', 'na cute'],
  });
});

app.listen(PORT, () => {
  console.log('Confuse on PORT : ' + chalk.red(PORT));
});
