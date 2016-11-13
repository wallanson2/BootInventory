
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
                <img src={"images/" + data.attributes.image} alt="..." data-id={data.cid}/>
                <h4>{data.attributes.bootName}</h4>
                <p>Price: {data.attributes.price}</p>
                <p>Quantity: {data.attributes.quantity}</p>
              </div>
            </div>
      )
    })
//{data.imgasdfasd}

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
        <hr/>
        <div className="inv-input-container">
          <h4 className="note-to-self">wrap pictures in anchor tags and then whichever picture is selected will<br/>point to the input element to make inventory changes</h4>

          <form className="navbar-form inv-form-container" role="search">
            <div className="form-group">
              <button type="submit" className="btn btn-default">Add</button>
              <input type="text" className="form-control" placeholder="Enter Amount" />
              <button type="submit" className="btn btn-default" >Subtract</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

})


module.exports = MultiView
