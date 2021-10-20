import React from 'react';

function EventHandler(){
    //functionality
    function ClickButton(){
        console.log('button clicked')
    }

    //html to be rendered
    return(
        <div className="EventHandler-component">

        <button onClick={ClickButton}>Button</button>
        </div>
    )
}
export default EventHandler;