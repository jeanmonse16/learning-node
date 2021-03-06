const express = require("express")
const multer = require("multer")
const response = require("../../network/response")
const controller = require("./controller")
const config = require("../../config")

const router = express.Router()

const upload = multer({
  dest: "public/" + config.filesRoute + "/",
})

router.get("/", function(req, res){
    const filterMessages = req.query.user || null
    controller.getMessage(filterMessages)
      .then((messageList) => {
        response.success(req, res, messageList, 200)
      })
      .catch(e => {
        response.error(req, res, e, 500, "ha ocurrido un error")
      })
})

router.post("/", upload.single("file") , function(req, res){
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
      .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
      })
      .catch((e) => {
        response.error(req, res, e, 400, "Ha ocurrido un error")
      })
   })

router.patch("/:id", function(req, res){
  console.log(req.params.id)

  controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
       response.success(req, res, data, 200)
    })
    .catch( e => {
      response.error(req, res, "ERROR INTERNO", 500, e)
    })
})

router.delete("/:id", function(req, res){
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} borrado con exito`, 200)
    })
    .catch((e) => {
      response.error(req, res, "Ha ocurrido un error", 500, e )
    })
})

module.exports = router