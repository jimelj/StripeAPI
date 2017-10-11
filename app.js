const express = require('express');
const stripe = require('stripe')('sk_test_uZ8MYY9qulw9Zy0esje5GnXn');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
})
