import React, { Component } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

export default class Renderer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          id:this.props.id,
          data:[],
          type:0,
          visible:false
        };
    }
    
    Now=()=>{
        this.setState({type:0,visible:true});
        setTimeout(()=>{this.setState({visible:false});},1000);
    }
    
    fillData(){
        axios.get('/data.json').then(data=>{
            this.setState({data:data.data.category[this.state.id]})
        })
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="white";
        this.fillData();
    }

    componentWillReceiveProps(prop){
        this.setState({id:prop.id,data:[]});
        this.fillData();
    }

        render() {

            let list=[];
            for(let i=0;i<this.state.data.length;i++){
            list.push(
                <ProductCard Now={this.Now} data={this.state.data[i]}/>
            );
        }

  const {visible,type}=this.state;



        return (
         <div>
            {(visible === true) ? ((type === 0) ?<div style={{marginTop:"2em"}}class="alert alert-primary" role="alert">Added to Cart!</div> : <div class="alert alert-primary" role="alert">Sorry this i!em is out Of stock</div>):null}

            <div className="CATE row">
                    {list}
                </div>
                
                
                
        </div>
        )
    }
}