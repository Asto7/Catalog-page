const initState={
    data:[]
}
const rootReducer=(state=initState,action)=>{

    if(action.type=="DELET"){

        for(let i=0;i<state.data.length;i++){
            if(state.data[i].name==action.data.name){state.data.splice(i,1);break;}
        }
        return state;
    }

    else if(action.type=="add"){
    let flag=1;
        
        for(let i=0;i<state.data.length;i++){
            if(state.data[i].id==action.data.id&&state.data[i].name==action.data.name){
                state.data[i].avail++;
                flag=0;
                break;
            }
        }

        if(flag){
            let A={...action.data,avail:1}
            state.data.push(A);
            return {...state}
        }

        else{
            return state;
        }

        }
    
    else 

    return state;
}

export default rootReducer;