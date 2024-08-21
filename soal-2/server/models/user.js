//import connection then use it here
const Db = require('../config/db.js');
const { hashPassword } = require('../helpers/hash.js');
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
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const searchQuery = `SELECT "Id", "Username", "Password" , "CreateTime" FROM tbl_user;`;
      const users = await this.#connection.query(searchQuery);
      return users.rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addUser({username, password}) {
    try {
      const hashedPassword = hashPassword(password);
      const insertQuery = `INSERT INTO tbl_user("Username", "Password") VALUES ('${username}', '${hashedPassword}');`;
      await this.#connection.query(insertQuery);
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const userQuery = `DELETE FROM tbl_user WHERE "Id" = ${id};`;
      await this.#connection.query(userQuery);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(id) {
    try {
       const searchQuery = `SELECT "Username" FROM tbl_user WHERE "Id"='${id}';`;
       const user = await this.#connection.query(searchQuery);
       return user.rows[0];
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, {username, password}) {
    try {
      console.log(id, 'id on SQL');
      
      const hashedPassword = hashPassword(password);
      const updateQuery = `UPDATE tbl_user SET "Username" = '${username}', "Password" = '${hashedPassword}' WHERE "Id" = ${id};`;
      await this.#connection.query(updateQuery);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = User;