# Phiraka Take Home Assignment - Zaky Abdurrahman  
## Soal 1  
For my implementation, I use TailwindCSS, React + Vite for the display  
### How to Run  
Go to `soal-1` folder and run this commands  
```bash
npm i  
npm run dev  
```  
After that go to the link that appear in the console. It's most likely `http://localhost:5173`  
  
## Soal 2   
For my implementation, I use manual SQL Queries using node-postgres (which from what I gather is the instruction), which has limitation as it can't create a new database if its not already exist, it only connect to an existing database, so to run this app, please make sure that `user_db` database already exists on your local machine's PostgreSQL. The archictecture is client - server so you need to run both the server and the client to access the application  
The default User for testing is:   
Username: admin  
Password: 12345  
### Tech Stacks  
Express, PostgreSQL, React + Vite, Tailwind  
### How to Run   
#### Server Setup  
Create a database named `db_user` on your local postgres.  
Go to server folder in soal-2, and run the following commands:  
```bash
npm i  
node migrations/migration.js  
node seeders/seeder.js  
node app.js  
```  