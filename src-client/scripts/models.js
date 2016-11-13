const Backbone = require('backbone');



const InventoryModel = Backbone.Model.extend({
  url: "/all-boots",

  initialize: function(){

  }
});

const InventoryCollection = Backbone.Collection.extend({
  model: InventoryModel,
  url: "/all-boots",

  initialize: function(){
     console.log(InventoryCollection)
  }

});

module.exports = {
  InventoryModel,
  InventoryCollection
}
