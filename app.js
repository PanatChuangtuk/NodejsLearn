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

productsRouter.route('/').get((req, res) => {
  res.render('products', {
    products: [
      {
        productsTitle: 'งง',
        productsDescription: 'น้ำยาตรางง 1',
        productsPrice: 4100,
      },
      {
        productsTitle: 'งง',
        productsDescription: 'น้ำยาตรางง 2',
        productsPrice: 4200,
      },
      {
        productsTitle: 'งง',
        productsDescription: 'น้ำยาตรางง 3',
        productsPrice: 4300,
      },
      {
        productsTitle: 'งง',
        productsDescription: 'น้ำยาตรางง 4',
        productsPrice: 4400,
      },
    ],
  });
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
