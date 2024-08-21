const Db = require('../config/db');

const connection = new Db().connection;

async function migrate () {
  try {
    //queries
    const dropAll = `DROP TABLE IF EXISTS "tbl_user";`;
    const createTable = `
      CREATE TABLE "tbl_user" (
        "Id" SERIAL PRIMARY KEY,
        "Username" VARCHAR(128) NOT NULL,
        "Password" VARCHAR(60) NOT NULL,
        "CreateTime" DATE NOT NULL DEFAULT CURRENT_DATE
    );
    `;


    //execution
    await connection.query(dropAll);
    console.log('tbl_user dropped');
    await connection.query(createTable);
    console.log('tbl_user created');
    process.exit(0);
    
  } catch (error) {
    console.log(error);
    
  }
}

migrate()