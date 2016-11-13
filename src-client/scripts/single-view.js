const React = require('react')
<<<<<<< HEAD
const Backbone = require('backbone')
=======
const ReactDOM = require('react-dom')

>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91
const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')

<<<<<<< HEAD

const SingleView = React.createClass({

   render: function(){
      return(
         <div className="single-container">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12">

               </div>
            </div>
         </div>
      )
   },

    _addItem: function() {
     ACTIONS.addInventoryItem()
    },

    _subtractItem: function() {
      ACTIONS.subtractInventoryItem()
    },




    })

=======
const SingleView = React.createClass({

  render: function() {

  }
})
>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91

module.exports = SingleView
