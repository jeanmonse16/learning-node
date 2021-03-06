const store = require("./store")
const { socket } = require("../../socket")
const config = require("../../config")

function addMessage(chat, user, message, file){
  return new Promise((resolve, reject) => {
      if(!chat || !user || !message){
          console.error("erroneas credenciales")
          reject("Datos invalidos")
          return false
      }

  let fileUrl = ''
  if(file){
      fileUrl = config.host + ':' + config.port + config.publicRoute + '/' + config.filesRoute + '/' + file.filename
  }

  const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
        file: fileUrl
  }
  store.add(fullMessage)
  socket.io.emit("message", fullMessage)
  resolve(fullMessage)
  })
}

function getMessage(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
        reject("Error inesperado")
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) =>  {
        if(!id || !message){
          reject("invalid data")
          return false
        } 
        const result = await store.update(id, message)
        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if(!id){
            reject("error en el request")
            return 0
        }
        store.delete(id)
          .then(() => {
              resolve()
          })
          .catch(e => {
              reject(e)
          })
    })
}

module.exports = {
    addMessage, 
    getMessage,
    updateMessage,
    deleteMessage
}