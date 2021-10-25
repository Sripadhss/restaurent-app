import React,{Component} from 'react'
import Signup from './Signup';
import ReactRoundedImage from 'react-rounded-image';
import './Login.css'
import {Link} from 'react-router-dom'
import HomePage from '../pages/homepage/homepage.component';
import img from '../images/picc.jpg'





class Login extends React.Component
{
    render(){

        return(
        <div id="Login-Component"  >
            <h2><Link to='/' class="colorchange">AMNESIA 
                </Link></h2>
        <br/><br/>
        <center>
        <ReactRoundedImage image={img} roundedSize="0" imageWidth="75" imageHeight="75" />
        </center>
            <h3 style={{margin:0, padding:0}}>Welcome Back !</h3>
            <h6 style={{margin:0, padding:0,marginBottom:"30px"}}>sign in to your account</h6>

         
       
        <input type="text" placeholder="  Enter Email Here !" style={{height:35,width:250,margin:3, padding:0,border: "1px solid #D3D3D3",
  borderRadius: "3px"}} />
        <br/>

       

        <input type="text" placeholder="  Enter Password here!"  style={{height:35,width:250,border: "1px solid #D3D3D3",borderRadius: "3px"}}/>
        <br/>
         <input type="checkbox" />Remember me

        
        <button style={{backgroundColor:"#FA8072", height:"40px",width:"80px",marginLeft:"40px",marginTop:"10px",fontSize:"12px",color:"white",borderRadius:"4px",border:"none"}}>SIGN IN</button> 
        <Signup/>
        <Link to="/">LOGOUT</Link>
        </div>
        )


    }
}

export default Login;