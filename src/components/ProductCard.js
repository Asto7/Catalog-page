import React, { Component } from 'react'
import '../style/productCard.css'
import {connect} from 'react-redux';

class ProductCard extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  addCart=()=>{
    this.props.add(this.state);
    this.props.Now();
  }

    render() {
        return (
    <div style={{margin:"2em 0em"}}className="col-lg-12 ">
      <div className="card"><br/>
        
        <div className="row">

          <div className="col-xs-12 col-lg-4 col-md-6 col-sm-7">
            <center><div><img  style={{maxHeight:"15em",width:"auto",maxWidth:"100%"}} className="card-img" src={this.state.image} alt="Vans"/></div></center>
          </div>  

          
          <div className="col-xs-12 col-lg-8 col-md-6 col-sm-5">
                  <div  className="card-body">        
                    <h4 className="card-title">{this.state.name}</h4>
                  
        <h6 className="card-subtitle mb-2 text-muted">Stock Availble: {this.state.avail} | {this.state.rate}⭐</h6>
                  
                    <p className="card-text">
                    {this.state.description}
                    </p>
                    
                      {/* <div className="options d-flex flex-fill">
                        <select className="custom-select mr-1">
                            <option selected>Color</option>
                            <option value="1">Green</option>
                            <option value="2">Blue</option>
                            <option value="3">Red</option>
                        </select>
                      </div> */}
                    
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4">₹{this.state.price}</h5></div>
                        <div onClick={this.addCart} style={{overflowX:"hidden"}} className="btn btn-danger mt-3"><i className="fa fa-shopping-cart"></i> Add to Cart</div>
                      </div>
                  </div>
          </div>  


        </div>




      </div>
    </div>

)
    }
}

const mapDispatchToProp=(dispatch)=>{
  return{
    add:(datas)=>{
      dispatch({
        type:'add',
        data:datas
      })
    }
}
}

export default connect(null,mapDispatchToProp)(ProductCard)