const mysql = require('mysql');

const credentials = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "react_db",
    port: 3306
  }
);

credentials.connect();
credentials.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) console.log(error);
  console.log('The solution is: ', results[0].solution);
});

module.exports = credentials;