const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const hostname = "127.0.0.1";

const port = 3071;
const sqlite3 = require("sqlite3").verbose();
const app = express();
const db = new sqlite3.Database("dbUser.db");

app.use(express.static("../frontend/"));

app.use(express.json());

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  // Abre o banco
  var sql = "SELECT * FROM tbUser ORDER BY title COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

app.get(
  "/teste",
  (
    req,
    res //res:o que o servidor vai devolver para o frontend;
  ) => {
    db.get(
      ` SELECT * FROM tbUser WHERE id == 1 `, (err,response) =>{
        console.log("oi");
        res.send(response);
      }
    )

  });

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});
