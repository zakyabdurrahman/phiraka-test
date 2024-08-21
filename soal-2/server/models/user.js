//import connection then use it here
const Db = require('../config/db.js');
class User {
  #connection = {}

  constructor() {
    this.#connection = new Db().connection;
  }

  async findByUsername(username) {
    const searchQuery = ``;
  }
}