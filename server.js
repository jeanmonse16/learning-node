const express = require("express")
const router = express.Router()

var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

router.get("/get", function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro servidor propio"
    })
    console.log(req.body)
    res.status(201).send([{
        error: "none", body: "Añadido correctamente"
    }])
})

router.post("/post", function(req, res){
    res.send("hola post")
})

app.listen(3000)

console.log("la aplicacion corre a través de localhost:3000")