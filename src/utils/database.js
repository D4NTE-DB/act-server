// * Informacion para la conexion con la base de datos

const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'forum_db_e3',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: "root",
  dialect: "postgres"
})

module.exports = db;