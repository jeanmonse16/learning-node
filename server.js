const express = require("express")
const app = express()
const server = require("http").Server(app)
const socket = require("./socket")
const config = require("./config")
require("dotenv").config()

const cors = require("cors")
const router = require("./network/routes")
const db = require("./db")

db(config.dbUrl)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
socket.connect(server)
router(app)

app.use(config.publicRoute, express.static("public"))

server.listen(config.port, () => console.log("la aplicación corre a traves de " + config.host + ":" + config.port) )
