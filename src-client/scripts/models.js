const Backbone = require('backbone');



const InventoryModel = Backbone.Model.extend({
  url: "",
});

const InventoryCollections = Backbone.Collection.extend({
  model: InventoryModel,
  url: "",

});
