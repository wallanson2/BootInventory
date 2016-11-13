const Backbone = require('backbone')

const UserModel= require('./model-user.js')
const {InventoryModel, InventoryCollection} = require('./models.js')
const STORE = require('./store.js')

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
  },

  fetchInventoryCollection: function(queryObj){
    console.log('queryObj', queryObj)
     const inventoryColl = new InventoryCollection()
     inventoryColl.fetch().then(function(){
        STORE.setStore('currentInventory', inventoryColl.models )

     })

  }


}


module.exports = ACTIONS
