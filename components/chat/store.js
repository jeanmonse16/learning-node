const model = require("./model")

function createChat(users){
    const myChat = new model(users)
    myChat.save()
}

const listChat = (chats) => {
    let filter = {}
    if(chats){
      filter = {
        _id: chats
      }
    }
    const filteredChats = model.find(filter)
    return filteredChats
}

module.exports = {
    create: createChat,
    list: listChat
}