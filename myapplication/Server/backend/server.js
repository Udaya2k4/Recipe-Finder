const express = require('express');
const cors = require('cors');
const app = express();

const recipesRoute = require('./routes/Recipes1');

app.use(cors());
app.use(express.json());
app.use('/', recipesRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
