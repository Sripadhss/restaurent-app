import React from 'react';
import "./menu.css"
import './comp.css';
import {Link} from 'react-router-dom'
import MainLogin from '../../MainLogin/mainlogin';

export default function Beverages(){
  return(
        <div className="compCss">
          <h2><Link to='/' class="colorchange">AMNESIA 
                <Link to="/Login" Component={MainLogin}>
                <button style={{fontSize:"20px", float: "right",margin:'15px',borderRadius:'10px'}} id="Login">
                  Login
                </button></Link></Link></h2>
      <h1 style={{textAlign:'center',padding: '50px'}}>Drinks for kids </h1> 
      <div style={{textAlign:'center'}}>
<li>coke</li>
<li>thumsup</li>
<li>Butter milk</li></div>
      
    </div>
  )
}