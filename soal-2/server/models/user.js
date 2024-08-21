//import connection then use it here
const Db = require('../config/db.js');
class User {
  #connection = {}

  constructor() {
    this.#connection = new Db().connection;
  }

  async findByUsername(username) {
    try {
      const searchQuery = `SELECT * FROM tbl_user WHERE "Username"='${username}';`;
      const user = await this.#connection.query(searchQuery);
      return user.rows[0];
    } catch (error) {
      console.log(error);
      
    }
  }

  async getAllUsers() {
    try {
      const searchQuery = `SELECT "Id", "Username", "Password" , "CreateTime" FROM tbl_user;`;
      const users = await this.#connection.query(searchQuery);
      return users.rows;
    } catch (error) {
      console.log(error);
      
    }
  }
}

module.exports = User;