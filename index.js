const dotenv = require('dotenv');

dotenv.config()

const express  = require('express');

const router = require('./app/router')

const app = express();

const PORT = process.env.PORT || 5050;

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port${PORT}`, `http://localhost:${PORT}`)
});