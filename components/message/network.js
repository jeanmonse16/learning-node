const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/", function(req, res){
    console.log(req.headers)
    console.log(req.body)
    response.success(req, res, "Todo salió bien")
})

router.post("/", function(req, res){
    controller.addMessage(req.body.user, req.body.message)
      .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
      })
      .catch((e) => {
        response.error(req, res, e, 400, "Ha ocurrido un error")
      })
   })

module.exports = router