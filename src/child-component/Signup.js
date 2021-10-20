import React,{component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from '../WithGoogle'
import '../App.css'

class SignUp extends React.Component {
    render(){
        return(
            <div className = 'SignUp-component'>
            <h4>This is a SignUp component</h4>      <br></br>


            <Google/>
            </div>
        )
    }
}
export default SignUp; 