const store = require("./store")

function createChat(users){
  return new Promise((resolve, reject) => {
      if(!users || users < 2){
          reject("invalid users")
          return 0
      }
      const newChat = {
          users: users
      }
      store.create(newChat)
      resolve(newChat)
  })
}

function listChats(chats){
  return new Promise((resolve, reject) => {
      resolve(store.list(chats))
      reject("Ha ocurrido un error")
  })
}

module.exports = {
    createChat,
    listChats
}