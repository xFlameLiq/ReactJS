const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const credentials = require('./db');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
  console.log("Hola mundo");
});

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  console.log(email, password);
  credentials.query(`SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`, (err, result) => {
    if(err) {
      res.json({ err }); 
    } else {
      if(result.length > 0) {
        res.json({result});
      } else {
        res.json({result});
        res.json(console.log("Usuario no encontrado"));
      }
      
    }
  });
})

app.post('/register', (req, res) => {
  const {name, lastname, email, password, sex, phone} = req.body;
  credentials.query(`INSERT INTO users (name, lastname, email, password, sex, phone) VALUES ("${name}", "${lastname}", "${email}", "${password}", "${sex}", "${phone}")`, (err, result) => {
    if (err)  {
      res.json({ message: 'Error' }); 
    } else {
      res.json({ message: 'User created' });
    }
  });
});




