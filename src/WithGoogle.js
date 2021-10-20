import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert} from 'react-bootstrap/';



function Google(){
    return(
        <div className='Google-component'>
            <Button variant="primary">Signup with Google</Button>
            <br></br>
            <br></br>

            <Button variant="success">Signup with Email</Button>

        </div>
    )
}
export default Google;