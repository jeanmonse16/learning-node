const express = require("express")
const response = require("./network/response")


const router = express.Router()

var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

router.get("/get", function(req, res){
    console.log(req.headers)
    console.log(req.body)
    response.success(req, res, "Todo salió bien")
})

router.post("/get", function(req, res){
    if(req.query.error === "ok"){
        response.error(req, res, "Error simulado", 400)
    }else{
        response.success(req, res, "Todo salió bien", 201)
    }
})

app.use("/app", express.static("public"))

app.listen(3000)

console.log("la aplicacion corre a través de localhost:3000")