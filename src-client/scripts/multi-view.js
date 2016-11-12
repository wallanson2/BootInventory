const React = require('react')
const ReactDOM = require('react-dom')

const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')


const MultiView = React.createClass({
  componentWillMount: function(){
    ACTIONS.fetchInventoryCollection()
  },
  render: function(){
    return (
        <h1>BootHaus</h1>
    )
  }
  // ReactDOM.render(document.querySelector('#app-container')) = '<h1>am i working</h1>'

})


module.exports = MultiView
