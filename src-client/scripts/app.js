const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');


const DashboardView = require('./multi-view.js')



const AppRouter = Backbone.Router.extend({

    routes: {
      "multiview" : "showMultiView"
      "*path" : "showAuthView"

    }

  showMultiView: function(){
    ReactDOM.render( <DashboardView/>  ,  document.querySelector('#app-container') )
  }

  showAuthView: function({


    render: function(){
      return (
        <form role=“form”>
          <div className=“form-group”>
            <input type=“text” valueLink={this.linkState(‘user’)} placeholder=“Username” />
            <input type=“password” valueLink={this.linkState(‘password’)} placeholder=“Password” />
          </div>
          <button type=“submit” onClick={this.login.bind(this)}>Submit</button>
        </form>
      )
    }
  })
  initialize: function() {
    Backbone.history.start()
  }

})

new AppRouter()
