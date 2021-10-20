import React from 'react';

const RestaurentNames = ({listofplaces}) =>{
    return(
        <div className = "Restaurent-Names">
            
            <p>One of the Restaurents is {listofplaces[1].name}</p>
            
        </div>
    )
}
export default RestaurentNames; 