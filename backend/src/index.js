const express = require('express');
const morgan = require('morgan');
const connection = require('./db');


const app = express();


app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/login', (req, res) => {
  res.json({ message: 'Login' });
})

app.post('/register', (req, res) => {
  const {name, lastname, email, password, sex, phone} = req.body;
  connection.query(`INSERT INTO users (name, lastname, email, password, sex, phone) VALUES ('${name}', '${lastname}', '${email}', '${password}', '${sex}', '${phone}')`, (err, result) => {
    if (err) res.json({ message: 'Error' });
    res.json({ message: 'User created' });
  });
});




app.listen(3000, () => {
  console.log('Server started on port 3000');
});