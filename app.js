const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const productsRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

productRouter.route('/').get((req, res) => {
  res.render('products');
});

productsRouter.route('/1').get((req, res) => {
  res.send('Hello Products 2');
});

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
