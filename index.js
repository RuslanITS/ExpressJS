const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Server started 8000 port</h1>
  `);
});

app.get('/:text', (req, res) => {
  res.send(`<h1>${req.params.text}</h1>`);
});

app.listen(PORT, () => {
  console.log("Server started");
});