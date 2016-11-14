const React = require('react')
const Backbone = require('backbone')
const ReactDOM = require('react-dom')



const {InventoryModel, InventoryCollection,} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const MultiView = require('./multi-view.js')
// console.log(this.props.payloadData)


const SingleView = React.createClass({
   componentDidMount: function(){
     console.log('fetching....', this.props.pidVal)
     ACTIONS.fetchInventoryModel(this.props.pidVal)

   },

   _addQty: function(evt){
      evt.preventDefault()
      let objAttributes = this.props.singleData.toJSON()
      ACTIONS.changeQuantity(objAttributes, 1)
   },



  render: function() {
     let self = this
     console.log("props single view", this.props.singleData);



    return(
      <div className="single-container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="thumbnail thumbnail-container-single">
              <h1 className="details-header">Details about product:</h1>
              <img src={"images/" + this.props.singleData.get("image") }/>
              <h1 className="boot-name">Name: {this.props.singleData.get("bootName")}</h1>
              <h1 className="boot-quantity">Quantity: {this.props.singleData.get("quantity")}</h1>
            </div>
            <form className="navbar-form inv-form-container" role="search">
              <div className="form-group">
                <button type="submit" className="btn btn-default" onClick={this._addQty}>Add</button>
                <button type="submit" className="btn btn-default" >Subtract</button>
              </div>
            </form>
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

});


module.exports = SingleView
// <img src={"images/" + data.attributes.image} alt="..." data-id={data.cid}/>
//<img src={"/image/" + data.cid}/>
