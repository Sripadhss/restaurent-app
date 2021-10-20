import React from 'react';


function Food() {
    return(
        <div className = "Food-component" data-toggle="collapse" data-target="#CollapseOne"
        style={{
            backgroundColor: 'maroon',
            borderRadius:'5px',
            width: '95%',
            height: '30px',
            textAlign: 'left',
            margin: '10px',
}}>
    <i class="fa fa-solid fa-caret-right" style={{color:'white',width:'20px',
            float: 'right',fontSize: 'x-large',
            }} ></i>
            <h4 style={{color:'white',padding:'5px'}}>Food</h4>
            
        </div>
    )
}
export default Food;