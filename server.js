const express = require("express")

const router = require("./network/routes")

var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
router(app)

app.use("/app", express.static("public"))

app.listen(3000)

console.log("la aplicacion corre a través de localhost:3000")