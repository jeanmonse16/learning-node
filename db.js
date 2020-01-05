const db = require("mongoose")

db.Promise = global.Promise

async function connect(url){
  db.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log("[db]: database connected")
}

module.exports = connect
