const model = require("./model")

function createChat(users){
    const myChat = new model(users)
    myChat.save()
}

const listChat = (chats) => {
   return new Promise((resolve, reject) => {
      let filter = {}
      if(chats){
        filter = {
          _id: chats
        }
      }
      model.find(filter)
        .populate("users")
        .exec((err, populated) => {
          if(err){
            reject(err)
            return 0
          }
          resolve(populated)
      })
   })
}

module.exports = {
    create: createChat,
    list: listChat
}