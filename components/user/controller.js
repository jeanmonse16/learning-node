const store = require("./store")

function addUser(name){
  if(!name){
      Promise.reject("Invalid name")
  }

  const user = {
      name: name,
  }
  
  return store.add(user)
}

function getUser(user){
    return new Promise((resolve, reject) => {
        resolve(store.list(user))
        reject("Intern Error")
    })
}

module.exports = {
    addUser,
    getUser
}