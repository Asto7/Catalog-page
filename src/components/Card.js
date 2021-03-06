import React, { Component } from 'react'
import '../style/productCard.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


class Card extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
    console.log(this.props.data)
  }

  componentDidMount(){
    this.props.updatePrice(this.state.price,this.state.avail);
  }

  removeCart=()=>{
    this.props.remove(this.props.data);
  }
  minuS=()=>{
    this.props.minus(this.props.data);
  }


  pluS=()=>{    
    this.props.plus(this.props.data);
  }

    render() {
        return (
    <div style={{margin:"2em 0em"}}className="col-lg-12 ">
      <div className="card"><br/>
        
        <div className="row">

          <div className="col-xs-12 col-lg-4 col-md-4 col-sm-12">
            <center><div><img  style={{maxHeight:"15em",width:"auto",maxWidth:"100%"}} className="card-img" src={this.state.image} alt="Vans"/></div></center>
          </div>  

          
          <div className="col-xs-12 col-lg-8 col-md-8 col-sm-12">
                  <div  className="card-body">        
                    <h4 className="card-title">{this.state.name}</h4>
                  
        <h6 className="card-subtitle mb-2 text-muted">Quantity: <span style={{color:"blue",fontWeight:"700"}}>{this.state.avail}</span> | {this.state.rate}⭐</h6>
                  
        {this.state.description?<p dangerouslySetInnerHTML={{ __html: `${this.state.description}` }} className="card-text"/>:null}

                  <div><a href="/cart" style={{textDecoration:"none"}} onClick={this.minuS} style={{fontWeight:"700",cursor:"pointer",display:"inline",marginRight:"0.5em"}}>-</a><input value={this.state.avail} disabled style={{width:"2em",textAlign:"center"}} type="text"/><a href="/cart" onClick={this.pluS} style={{fontWeight:"700",cursor:"pointer",display:"inline",marginLeft:"0.5em"}}>+</a></div>

                      <div className="buy d-flex justify-content-between align-items-center">
                                 <div className="price text-success"><h5 className="mt-4">₹{this.state.price} X{this.state.avail }</h5>
                      </div>
                        
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
        remove:(datas)=>{dispatch({type:"DELET",data:datas})},
        minus:(datas)=>{dispatch({type:"minus",data:datas})},
        plus:(datas)=>{dispatch({type:"plus",data:datas})}
    }
}


export default connect(null,mapDispatchToProps)(Card)