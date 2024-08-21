const express = require('express');
const Controller = require('./controllers/controller');
const app = express();
const PORT = 3000;
//setup cors
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const authentication = require('./middlewares/authentication');

app.use(cors());

app.use(express.json());

app.post('/login', Controller.login);
app.use(authentication);
app.get('/users', Controller.getUsers);
app.post('/users', Controller.addUser);
app.delete('/users/:id', Controller.deleteUser);
app.get('/users/:id', Controller.renderEditUser);
app.put('/users/:id', Controller.editUser);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Online on http://localhost:${PORT}`);
  
})