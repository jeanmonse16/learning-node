const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/", function(req, res){
    id = req.query.id || null
    controller.listChats(id)
      .then(data => {
          response.success(req, res, data, 202)
      })
      .catch(e => {
          response.error(req, res, "Internal Error", 501, e)
      })
})

router.post("/", function(req, res){
    controller.createChat(req.body.users)
      .then(data => {
          response.success(req, res, data, 201)
      })
      .catch(e => {
          response.error(req, res, "Internal Error", 500, e)
      })
})

module.exports = router