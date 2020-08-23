require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const ctrl = require("./controller");

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        },
    })
)

app.get("/api/inventory", ctrl.getAll)
app.post("/api/inventory", ctrl.createProduct)
// app.get("/api/inventory/:id", ctrl.getOne)
app.put("/api/inventory/:id", ctrl.updateProduct)
app.delete("/api/inventory/:id", ctrl.deleteProduct)

app.listen(SERVER_PORT, () => {
    console.log(`Do you like my car? ${SERVER_PORT}`)
})