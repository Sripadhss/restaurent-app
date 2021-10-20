import React from 'react';

const names=({listofplaces}) => {
    return(
        <div className = 'RestaurentName-component'>

        {listofplaces.map((s) => (
            <p>{s.name}</p>
        ))}
        </div>
    )
}
export default names;