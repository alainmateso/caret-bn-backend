require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  }
};
