import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Card';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
          value:0
        };
    }

    value=0;
    
    componentWillReceiveProps(prop){
        this.props=prop;
    }


    updatePrice=(amnt,unit)=>{
        let neww=amnt*unit;
        neww+=this.value;
        this.value=neww;
        this.setState({value:this.value})
    }

    render() {
        let list=[];
        for(let i=0;i<this.props.data.length;i++){
            list.push(
                <Card  updatePrice={this.updatePrice} data={this.props.data[i]}/>
            );
        }

        return (
            <div>
                
                {list.length>0?
                    (
                        <div>
                            <h2 style={{margin:"1em 0px 0px 0px"}}className="card-title">Sub Total :~ <span style={{color:"blue",cursor:"pointer"}}>₹{this.state.value}</span></h2>
                        {list}
                        </div>

                    )
                :<div><div style={{margin:"20% 0rem 0rem 0px",fontSize:"3rem"}}>
                    Appears Like Your Cart is Empty    
                </div>
                <div>
                Why not fill it up with our amazing range of products?
                </div>
                </div>}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {data:state.data}
}


export default connect(mapStateToProps,null)(Cart)