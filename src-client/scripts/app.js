const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');


const AuthView = require('./auth-view.js')




const MultiView = require('./multi-view.js')

const AppViewController = require('./component-viewcontroller.js')

console.log(Backbone)

const AppRouter = Backbone.Router.extend({

    routes: {
      "singleview" : "showSingleView"
      "multiview" : "showMultiView",
      "*path" : "showAuthView"

    },

  showMultiView: function(){
    ReactDOM.render( <AppViewController routedFrom="MultiView"/>, document.querySelector('#app-container') )
  },

  showAuthView: function(){

    ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container') )

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
