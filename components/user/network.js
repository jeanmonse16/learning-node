const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")

const router = express.Router()

router.get("/", function(req, res){
    const filterUser = req.query.user || null
    controller.getUser(filterUser)
      .then(data => {
          response.success(req, res, data, 201)
      })
      .catch(e => {
          response.error(req, res, "An error has occurred", 500, e)
      })
})

router.post("/", function(req, res){
    controller.addUser(req.body.name)
      .then(data => {
          response.success(req, res, data, 200)
      })
      .catch(e => {
          response.error(req, res, "An error has occurred", 400, e)
      })
})

module.exports = router