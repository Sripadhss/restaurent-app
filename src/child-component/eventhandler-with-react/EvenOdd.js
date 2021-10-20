import React from 'react';

class EvenOdd extends React.Component{
    constructor(props){
        super(props);
    }
    EvenOdd(x){ 
        console.log((x%2 ==0 ? "Is Even":"Is Odd"))
    }
    render(){
        return(
            <div>
                <button onClick={this.EvenOdd(1)}> Evenodd button</button>
            </div>
        )
    }
}
export default EvenOdd;