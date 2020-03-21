import React, { Component } from 'react'
import '../style/productCard.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


class Card extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  removeCart=()=>{
    this.props.remove(this.props.data);
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
                    
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4">₹{this.state.price}</h5></div>
                        <a onClick={this.removeCart} style={{overflowX:"hidden"}} href="/cart" className="btn btn-danger mt-3"><i className="fa fa-shopping-cart"></i>Discard</a>
                      </div>
                  </div>
          </div>  


        </div>




      </div>
    </div>

)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        remove:(datas)=>{dispatch({type:"DELET",data:datas})}
    }
}


export default connect(null,mapDispatchToProps)(Card)