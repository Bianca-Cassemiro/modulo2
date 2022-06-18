const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3030;
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("dbUser.db");
const path = require("path");
const { response } = require("express");
const { DefaultDeserializer } = require("v8");
app.use(express.static("../frontend/"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Servidor aplicação */
app.post("/createFriend" , (req,res)=>{
    const nome = req.body;
    db.run(
        `INSERT INTO nomes(nome) VALUES('${nome.name}') `
    )
})
app.post("/delete" , (req,res)=>{
    db.run(
        `DELETE FROM nomes WHERE id =='1'`

    )
})

app.post("/editado" , (req,res)=>{
    const nome = req.body;
    console.log(nome.edicao)
    db.run(
        `UPDATE nomes SET (nome) = ('${nome.edicao}') WHERE id == '1' `
    )
})

app.get("/getFriend", (req,res)=>{
    db.get(`SELECT * FROM nomes`,(err,response)=>{
        res.send(response)
    })

})




app.listen(port, hostname, () => {
  console.log(`Page server running at http://${hostname}:${port}/`);
});