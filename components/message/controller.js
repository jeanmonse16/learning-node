const store = require("./store")

function addMessage(user, message){
  return new Promise((resolve, reject) => {
      if(!user || !message){
          console.error("erroneas credenciales")
          reject("Datos invalidos")
          return false
      }

  const fullMessage = {
        user: user,
        message: message,
        date: new Date()
  }
  store.add(fullMessage)
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
            reject("No hay id indicado")
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