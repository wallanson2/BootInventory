const Backbone = require('backbone');



const InventoryModel = Backbone.Model.extend({
  url: "/user",

  initialize: function(){

  }
});

const InventoryCollection = Backbone.Collection.extend({
  model: InventoryModel,
  url: "/all-boots",

  initialize: function(){

  }

});

module.exports = {
  InventoryModel,
  InventoryCollection
}
