const express = require("express")
const router = express.Router()

var app = express()

app.use(router)

router.get("/get", function(req, res){
    res.send("hola get")
})

router.post("/post", function(req, res){
    res.send("hola post")
})

app.listen(3000)

console.log("la aplicacion corre a través de localhost:3000")