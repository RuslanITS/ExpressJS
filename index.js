const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const PORT = 8000;
const password = 'password';

app.get('/', (req, res) => {
  res.send(`
    <h1>Server started</h1>
  `);
});

app.get('/encode/:text', (req, res) => {
  const encoded = Vigenere.Cipher(password).crypt(req.params.text);

  res.send(`<h1>${encoded}</h1>`);
});

app.get('/decode/:text', (req, res) => {
  const decoded = Vigenere.Decipher(password).crypt(req.params.text);

  res.send(`<h1>${decoded}</h1>`);
});

app.get('/:text', (req, res) => {
  res.send(`<h1>${req.params.text}</h1>`);
});

app.listen(PORT, () => {
  console.log("Server started");
});