const Backbone = require('backbone')

const SingleModel = Backbone.Model.extend({
  urlRoot: "/get-boot",
  idAttribute: 'id',

  initialize: function(){

  }
});

module.exports = SingleModel
