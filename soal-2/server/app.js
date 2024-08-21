const express = require('express');
const app = express();
const PORT = 3000;
//setup cors

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Online on http://localhost:${PORT}`);
  
})