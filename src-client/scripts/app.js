const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const AuthView = require('./auth-view.js')
const SingleView = require('./single-view.js')
const MultiView = require('./multi-view.js')
const AppViewController = require('./component-viewcontroller.js')

//console.log(Backbone)

const AppRouter = Backbone.Router.extend({

    routes: {
<<<<<<< HEAD
      "singleview/:id" : "showSingleView",
=======
      "singleview" : "showSingleView"
>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91
      "multiview" : "showMultiView",
      "*path" : "showAuthView"

    },

    showSingleView: function(){
      ReactDOM.render( <AppViewController routedFrom="SingleView" />, document.querySelector('#app-container') )
    },

    showMultiView: function(){
      ReactDOM.render( <AppViewController routedFrom="MultiView"/>, document.querySelector('#app-container') )
    },

    showAuthView: function(){
      ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container') )




<<<<<<< HEAD


=======
>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91
    console.log("hi")

  },

  showSingleView: function(){
    ReactDOM.render(<AppViewController routedFrom="SingleView"/>, document.querySelector('#app-container') ))
  }


  initialize: function() {
    Backbone.history.start()
  }
  // ReactDOM.render( document.getElementById('app-container')) = "<h1>help me</h1>"
})


new AppRouter()
