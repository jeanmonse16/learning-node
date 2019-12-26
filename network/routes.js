const express = require("express")
const message = require("../components/message/network")

const routes = (server) => {
    server.use("/get", message)
}

module.exports = routes