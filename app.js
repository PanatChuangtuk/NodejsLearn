const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const products = require('./data/product.json');
const productsRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

productsRouter.route('/').get((req, res) => {
  res.render('products', products);
});

productsRouter.route('/:id').get((req, res) => {
  const id = req.params.id;
  res.send('Hello Products ' + id);
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
