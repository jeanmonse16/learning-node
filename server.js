const express = require("express")

const router = require("./network/routes")
const db = require("./db")

db("mongodb+srv://platzi:5qH0KAe1D6uXHEMv@curso-platzi-mongodb-gxkjo.mongodb.net")

var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
router(app)

app.use("/app", express.static("public"))

app.listen(3000)

console.log("la aplicacion corre a través de localhost:3000")