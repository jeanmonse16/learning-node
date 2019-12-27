const db = require("mongoose")
const Model = require("./model")

//mongodb+srv://platzi:5qH0KAe1D6uXHEMv@curso-platzi-mongodb-gxkjo.mongodb.net/test?retryWrites=true&w=majority
//la conexión a la base de datos cloud se resolvera con las promesas nativas de nodejs, en caso de dar error nos lo arrojara
db.Promise = global.Promise
db.connect("mongodb+srv://platzi:5qH0KAe1D6uXHEMv@curso-platzi-mongodb-gxkjo.mongodb.net", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
console.log("[db]: database connected")

function addMessage(message){
    const myMessage = new Model(message)
    myMessage.save() 
} 

async function getMessage(filterUser){
    try{
        let filter = {}
        if(filterUser){
            filter = {
              user: filterUser
            }
        }
        const messages = await Model.find(filter)
        return messages
    }catch(e){
        console.error(e)
    }
    
}

async function updateMessage(id, message){
  const foundMessage = await Model.findOne({
    _id: id
  })
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage
}