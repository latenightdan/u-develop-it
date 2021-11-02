const express = require('express');

const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Connect to sql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //YOUR MYSQL USERNAME
        user: 'root',
        //your sql password
        password:'Tw@tson100',
        database: 'election'
    },
    console.log('Connected to the election database')
);
db.query(`SELECT * FROM candidates`, (err, rows) =>{
    // console.log(rows);
});
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });

//   db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) =>{
//       if(err){
//           console.log(err);
//       }
//       console.log(result);
//   });

//create a candidate
// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
//DEFAULT FOR (NOT FOUND)
app.use((req, res) =>{
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
