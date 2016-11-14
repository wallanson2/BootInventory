const Backbone = require('backbone')

const STORE = require('./store.js')
const UserModel= require('./model-user.js')
const OopsView = require('./oops-view.js')
const {InventoryModel, InventoryCollection} = require('./models.js')


const ACTIONS = {
  authenticateUser: function(userDataObj){
    //  console.log('user data obj', userDataObj)
     let userMod = new UserModel()

     userMod.set(userDataObj)
    //  console.log('user mod', userMod)

     userMod.save().then(function(serverRes){
      // console.log('serverres', serverRes)
      location.hash = "/multiview"
    }).fail(function(err){
      // console.log('wrong pw bro')
      location.hash = "/oops"

    })
  },

  fetchInventoryCollection: function(queryObj){
    // console.log('queryObj', queryObj)
     const inventoryColl = new InventoryCollection()
     inventoryColl.fetch().then(function(){
        STORE.setStore('currentInventory', inventoryColl.models )

     })
  },

  fetchInventoryModel: function(pid){
     const singleMod = new InventoryModel()
     singleMod.set({id:pid})
     singleMod.fetch().then(function(){
        console.log('returned single mod' ,singleMod)
        STORE.setStore('singleListing', singleMod)
     })
 },



  // 
  // addInventoryItem: function(){
  //   //console.log('trying to add')
  // },
  //
  // _addItem: function(){
  //   // console.log('trying to add')
  //
  //   let addCount = new this.props.attributes.quantity
  //   //console.log(addCount)
  //   addCount = addCount + 1
  //
  //
  // },



  changeQuantity: function(objAttributes, qty){
    console.log('trying to add')
    objAttributes.quantity += qty
    let mod = new InventoryModel()
    mod.set(objAttributes)

    mod.url = "/edit-boot"
    let saveOptions = { type: 'POST'}
    mod.save(null, saveOptions).then(function(){
      STORE.setStore('singleListing', mod)
   })


  },

  _subtractItem: function(){
     console.log('trying to subtract')
     let subtractCount = new this.props.attributes.quantity
     console.log(subtractCount)
     subtractCount = subtractCount - 1
 },


}


module.exports = ACTIONS
