import React from 'react';
import DrinksComp from './listofdrinksComponent'

function Drinks() {
    return(
        <div className = "Drinks-component" data-toggle="collapse" data-target="#CollapseOne"
        style={{
            backgroundColor: 'maroon',
            borderRadius:'5px',
            width:'95%',
            height: '30px',
            margin: '10px',
            textAlign: 'left',
            }}>
                <i class="fa fa-solid fa-sort-down"style={{color: 'white',width:'20px',float: 'right',fontSize: 'x-large'}}></i>
            <h4 style={{color:'white',padding:'5px'}}>Drinks</h4>
            
            <DrinksComp/>
        </div>
    )
}
export default Drinks;