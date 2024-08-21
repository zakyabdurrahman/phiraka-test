//yes, this is a class

const {Pool} = require('pg');

class Db {
  constructor() {
    this.connection = new Pool({
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: 5432,
      database: "user_db",
    });
  }
}



module.exports = Db;