
// const Backbone = require('backbone')
// const React = require('react')
// const ACTIONS = require('./actions.js')
//
// const MultiView = React.createClass({
//    _handleBootData: function(evt){
//       evt.preventDefault()
//
//       let bootData = {
//
//       },
//    }
// })
//
// module.exports = MultiView

const React = require('react')
const ReactDOM = require('react-dom')

const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')

const MultiView = React.createClass({
  componentWillMount: function(){
    ACTIONS.fetchInventoryCollection()

    // console.log( "lets see" ,STORE._data.currentInventory)
  },

  _itemSelector: function() {

  },

  // _addItem: function() {
  //   ACTIONS.addInventoryItem()
  // },
  //
  // _subtractItem: function() {
  //
  // },

  render: function(){

    var bootListings = this.props.payloadData.map(function(data){
      console.log(data.attributes.image)
      return(
            <div className="col-xs-4  col-md-4">
              <div className="thumbnail thumbnail-container">
                <a href="./#singleview">
                  <img src={"images/" + data.attributes.image} alt="..." data-id={data.cid}/>
                </a>
                <h4>{data.attributes.bootName}</h4>
                <p>Price: {data.attributes.price}</p>
                <p>Quantity: {data.attributes.quantity}</p>
              </div>
            </div>
      )
    })

    console.log(  "BABAM SUCESS MOTHER F'er"  ,this.props.payloadData)
    console.log("hey this is the data here super long so i can see it",bootListings)
    return (
      <div className="multi-container">
        <h1 className="multi-header">BootHaus</h1>
        <h2 className="multi-sub-header">Inventory Control System</h2>
        <hr/>
        <div className="multi-pic-container">
          <div className="row">
            {bootListings}
          </div>
        </div>
      </div>
    )
  }

})


module.exports = MultiView
