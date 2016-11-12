const Backbone = require('backbone');



const InventoryModel = Backbone.Model.extend({
  url: "/user",

  initialize: function(){

  }
});

const InventoryCollections = Backbone.Collection.extend({
  model: InventoryModel,
  url: "/user",

  initialize: function(){

  }
});

module.exports = {
  InventoryModel,
  InventoryCollections
}
