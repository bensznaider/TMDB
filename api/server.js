const express = require("express");
const app = express();
const db = require("../api/db/index.js")
const models = require("./db/models/index.js")
const routes = require("./routes/index.js")
const cors=require("cors")

app.use(cors())

app.use(express.json())

app.use("/", routes)

 db.sync({force:false}).then(function () {
     app.listen(5000, () => console.log("Servidor escuchando en el puerto 5000"));
}).catch(console.error);
