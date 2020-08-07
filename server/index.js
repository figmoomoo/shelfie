require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())

// app.get("/api/inventory", ctrl.getAll)
// app.get("/api/inventory/:id", ctrl.getOne)
// app.put("/api/inventory/:id", ctrl.update)
// app.post("/api/inventory/", ctrl.create)
// app.delete("/api/inventory/:id", ctrl.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Do you like my car? ${SERVER_PORT}`)
})