const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));

app.get('/api/v1', (req,res) => {
  res.json({
    "message" : "hello!"
  })
})

const server = app.listen(3000, () => {console.log('Setting sail from port 3000!!!')})