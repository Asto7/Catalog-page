import React, { Component } from 'react'
import '../style/productCard.css'
import {connect} from 'react-redux';

class SearchCard extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  componentDidMount(){
    this.state =this.props.data;

    let garbage=this.props.garbage;
    let value=this.state.avail;

    for(let i=0;i<garbage.length;i++){
      if(garbage[i].id==this.state.id&&garbage[i].name==this.state.name){
          value=value-garbage[i].avail;  
            break;
      }
    }
  this.setState({avail:value});
  }


  heyu=()=>{
    this.props.Now(1);
  }
  addCart=()=>{
    this.props.add(this.state);
    this.setState({avail:this.state.avail-1});
    this.props.Now(0);
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
                  
        <h6 className="card-subtitle mb-2 text-muted">Stock Availble: {this.state.avail} | {this.state.rate}⭐</h6>
                  
        {this.state.description?<p dangerouslySetInnerHTML={{ __html: `${this.state.description}` }} className="card-text"/>:null}

                    
                    
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4">₹{this.state.price}</h5></div>
                        {this.state.avail==0?
                        <div onClick={this.heyu} style={{overflowX:"hidden"}}  className="btn btn-danger mt-3">Out Of Stock</div>
                        :
                        <div onClick={this.addCart} style={{overflowX:"hidden"}} className="btn btn-success mt-3"><i className="fa fa-shopping-cart"></i> Add to Cart</div>
                        }
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

const mapStateToProps=(state,props)=>{
  return {garbage:state.data}
}


export default connect(mapStateToProps,mapDispatchToProp)(SearchCard)