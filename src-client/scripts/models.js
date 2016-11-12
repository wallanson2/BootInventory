const Backbone = require('backbone');



const InventoryModel = Backbone.Model.extend({
  url: "/user",

  initialize: function(){

  }
});

const InventoryCollections = Backbone.Collection.extend({
  model: InventoryModel,
  url: "/all-boots",

  initialize: function(){
     console.log(InventoryCollections)
  }
});

module.exports = {
  InventoryModel,
  InventoryCollections
}
