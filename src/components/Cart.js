import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Card';

class Cart extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(prop){
        this.props=prop;
    
    }

    render() {
        let list=[];
        for(let i=0;i<this.props.data.length;i++){
            list.push(
                <Card remaining={this.props} data={this.props.data[i]}/>
            );
        }

        return (
            <div>
                
                {list.length>0?
                list
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