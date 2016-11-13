const React = require('react')
const ReactDOM = require('react-dom')

const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')

const MultiView = React.createClass({
  componentWillMount: function(){
    ACTIONS.fetchInventoryCollection()

  },

  _itemSelector: function() {


  },

<<<<<<< HEAD
=======



  // _addItem: function() {
  //   ACTIONS.addInventoryItem()
  // },
  //
  // _subtractItem: function() {
  //
  // },



>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91
  render: function(){
     let self = this


    var bootListings = this.props.payloadData.map(function(data, i){
      return(


<<<<<<< HEAD
            <div className="col-xs-4  col-md-4" key={data.cid}>
                 <div className="thumbnail thumbnail-container">
                   <img src={"images/" + data.attributes.image} alt="" data-id={data.cid}/>
                   <h4>{data.attributes.bootName}</h4>
                   <p>Price: {data.attributes.price}</p>
                   <p>Quantity: {data.attributes.quantity}</p>
                 </div>
               </div>
=======
            <div className="col-xs-4  col-md-4">
              <div className="thumbnail thumbnail-container">
                <img src={"images/" + data.attributes.image} alt="..." data-id={data.cid}/>
                <h4>{data.attributes.bootName}</h4>
                <p>Price: {data.attributes.price}</p>
                <p>Quantity: {data.attributes.quantity}</p>
              </div>
            </div>
>>>>>>> 724bdf3b660d73a93555c1a39d79cd7e4da72d91
      )
    })
// {data.imgasdfasd}

   // console.log(  "BABAM SUCESS MOTHER F'er"  ,this.props.payloadData)
   // console.log("hey this is the data here super long so i can see it",bootListings)
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
      </div>

    )
  }

})


module.exports = MultiView
