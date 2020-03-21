import React, { Component } from 'react'
import SearchCard from './searchCard'
import axios from 'axios';
import nextId from "react-id-generator";
const stringSimilarity = require('string-similarity');

export default class Search extends Component {
    
    constructor(props){
        super(props)
        this.state={
            all:[],
            text:"",
            type:0,
            visible:false
        }
    }
    htmlId = nextId();
    Now=(a)=>{
        this.setState({type:a,visible:true});
        setTimeout(()=>{this.setState({visible:false});},1000);
    }
    
    getNew=(event)=>{
        this.setState({text:event.target.value.toLowerCase()})
    }

    fillData(){
        axios.get('/data.json').then(data=>{

            let category=data.data.category;
            let all=[];
            for(const i in category){
                for(let j=0;j<category[i].length;j++){
                    all.push(category[i][j]);
                }
            }
            this.setState({all:all})
        })
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#F1F3F6";
        this.fillData();
    }

    render() {



        let {visible,type}=this.state
        
        const list=this.state.all.filter((data)=>{
            // return data.name.toLowerCase().indexOf(this.state.text)!==-1;
            return stringSimilarity.compareTwoStrings(data.name.toLowerCase(),this.state.text)>0.15;
        })
     
        list.sort( (a, b)=> {
            return stringSimilarity.compareTwoStrings(b.name.toLowerCase(),this.state.text)- stringSimilarity.compareTwoStrings(b.name.toLowerCase(),this.state.text); 
          })

        return (
            <div>
                <input onChange={this.getNew} placeholder="search" style={{borderRadius:"10em",color:"black",textAlign:"center",margin:"2em 0px 0px 0px", width:"50%",height:"2em"}} type="text"></input>          
                
                {(visible === true) ? ((type === 0) ?<div style={{marginTop:"2em"}} className="alert alert-primary" role="alert">Added to Cart!</div> : <div style={{marginTop:"2em"}} className="alert alert-danger" role="alert">Sorry this i!em is out Of Stock</div>):null}
            
                    <div className="CATE row">                 
                                    {list.map(data=>{
                                        return  <SearchCard key={data.name} Now={this.Now} data={data}/>
                                    })
                                    }
                    </div>
          
            </div>
        )
    }
}
