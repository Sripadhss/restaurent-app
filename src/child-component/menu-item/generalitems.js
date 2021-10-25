import React from 'react';
import "./menu.css"
import './comp.css';
import {Link} from 'react-router-dom'
import MainLogin from '../../MainLogin/mainlogin';

export default function GeneralItems(){
  return(
    <div className="compCss">
      <h2><Link to='/' class="colorchange">AMNESIA 
                <Link to="/Login" Component={MainLogin}>
                <button style={{fontSize:"20px", float: "right",margin:'15px',borderRadius:'10px'}} id="Login">
                  Login
                </button></Link></Link></h2>
      <h1 style={{textAlign:'center',padding: '50px'}}>Lets Damage the liver Bro </h1> 
      <div style={{textAlign:'center'}}>
      <li>Breezar</li>
      <li>KingFisher</li>
      <li>Wisky</li>   </div>   
    </div>
  )
}