const Model = require("./model")

function addUser(user){
    myUser = new Model(user)
    return myUser.save()
}

async function getUser(filterUser){
    try{
        let filter = {}
        if(filterUser){
          filter = {
            name: filterUser 
          }
        }
        const User = await Model.find(filter)
        return User
    }catch(e){
        return e
    }
}

module.exports = {
    add: addUser,
    list: getUser
}