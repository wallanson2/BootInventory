const Backbone = require('backbone')
const React = require('react')


const ACTIONS = require('./actions.js')

const AuthView = React.createClass({

  _handleUserAuth: function(evt){
    evt.preventDefault()

    let newUserData = {
      name: evt.target.name.value,
      password: evt.target.password.value
    }

    ACTIONS.authenticateUser(newUserData)
  },

  render: function() {
    return (
      <div>
            <form className="form-group grid-container" onSubmit={this._handleUserAuth}>
              <div className="auth-header-container">
                <h1 className="auth-header"></h1>
              </div>
              <div className="row auth-container-row">
                 <div className="form-field user-container col-sm-12 col-md-12">
                     <h2 className="user-label"><label>User </label></h2>
                     <input className="auth-inputs" type="text" name="name"/>
                 </div>

                 <div className="form-field pass-container col-sm-12 col-md-12">
                     <h2 className="pass-label"><label>Password </label></h2>
                     <input className="auth-inputs" type="password" name="password"/>
                 </div>

                 <div className="form-field btn-container col-sm-12 col-md-12">
                     <input type="submit" className="btn primary auth-button" value="+" />
                 </div>
              </div>
            </form>
      </div>
    )
  }
})

module.exports = AuthView
