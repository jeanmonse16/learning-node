const db = require("mongoose")

db.Promise = global.Promise

async function connect(url){
    //mongodb+srv://platzi:5qH0KAe1D6uXHEMv@curso-platzi-mongodb-gxkjo.mongodb.net/test?retryWrites=true&w=majority
    //la conexión a la base de datos cloud se resolvera con las promesas nativas de nodejs, en caso de dar error nos lo arrojara
  db.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log("[db]: database connected")
}

module.exports = connect