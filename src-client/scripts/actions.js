const Backbone = require('backbone')

const UserModel= require('./model-user.js')
const {InventoryModel, InventoryCollections} = require('./models.js')

const ACTIONS = {
  authenticateUser: function(userDataObj){
     console.log('user data obj', userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log('user mod', userMod)

     userMod.save().then(function(serverRes){
      console.log('serverres', serverRes)
      location.hash = ""
    })
  }
}


module.exports = ACTIONS
