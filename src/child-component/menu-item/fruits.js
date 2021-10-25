import React from 'react';
import "./menu.css"
import './comp.css';
import {Link} from 'react-router-dom'
import MainLogin from '../../MainLogin/mainlogin';

export default function Fruits(){
  return(
    <div className="compCss">
      <h2><Link to='/' class="colorchange">AMNESIA 
                <Link to="/Login" Component={MainLogin}>
                <button style={{fontSize:"20px", float: "right",margin:'15px',borderRadius:'10px'}} id="Login">
                  Login
                </button></Link></Link></h2>
     <h1 style={{textAlign:'center',padding: '50px'}}>start the game with starters</h1>
     <div style={{textAlign:'center'}}>

      <li>chilli chiken</li>
      <li> chiken 65</li>
      <li> gobbi 65</li></div>
      
    </div>
  )
}