const {Client} = require('pg');

const dataBase = new Client(process.env.PG_URL);

dataBase.connect()

module.exports = dataBase;