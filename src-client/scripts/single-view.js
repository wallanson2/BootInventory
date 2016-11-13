const React = require('react')
const ReactDOM = require('react-dom')

const {InventoryModel, InventoryCollection} = require('./models.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const MultiView = require('./multi-view.js')
// console.log(this.props.payloadData)
const SingleView = React.createClass({
  render: function() {
    return(
      <div className="single-container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="single-header">Single View Picture</h1>
          </div>
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

module.exports = SingleView
// <img src={"images/" + data.attributes.image} alt="..." data-id={data.cid}/>
