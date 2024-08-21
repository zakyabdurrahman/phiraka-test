const express = require('express');
const Controller = require('./controllers/controller');
const app = express();
const PORT = 3000;
//setup cors
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());

app.use(express.json());

app.post('/login', Controller.login);
app.get('/users', Controller.getUsers);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Online on http://localhost:${PORT}`);
  
})