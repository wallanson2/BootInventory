const Backbone = require('backbone')

const SingleModel = Backbone.Model.extend({
  url: "/get-boot",
  idAttribute: 'id',

  initialize: function(){

  }
});

module.exports = SingleModel
