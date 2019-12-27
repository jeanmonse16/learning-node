const Model = require("./model")

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

async function removeMessage(id){
    const deletedMessage = await Model.deleteOne({
        _id: id
    })
    return deletedMessage
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    delete: removeMessage
}