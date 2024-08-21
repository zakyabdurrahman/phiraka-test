const Db = require('../config/db.js');

const connection = new Db().connection;

async function seed() {
  try {

    //insert query
    const addUser = `INSERT INTO tbl_user ("Username", "Password") VALUES 
    ('admin', '$2a$10$rk0XhXe0deYg/FaT0YpRo.uMt0a97JUpT6O1CCQpt6/SwWjVd.zR.');`;
    const users = `SELECT * FROM tbl_user;`;
    
    //execution
    await connection.query(addUser);
    console.log('User Inserted');
    
    
    

    process.exit(0)
  } catch (error) {
    console.log(error);
    
  }
}

seed();