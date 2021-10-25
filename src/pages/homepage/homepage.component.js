import React from 'react';
import Directory from '../../child-component/directory/directory.component'
import {Link} from 'react-router-dom'
import Login from '../../MainLogin/Login'

import Main from '../../maincomponent/maincomponent'
import Deals from '../../child-component/deals/deals'
import './homepage.css'

function HomePage() {
    return (
      <div className="homepage-component">
          
                <h2><Link to='/' class="colorchange">AMNESIA 
                <Link to="/Login" Component={Login}>
                <button style={{fontSize:"20px", float: "right",margin:'15px',borderRadius:'10px'}} id="Login">
                  Login
                </button></Link></Link></h2>
                
                <p class="colorchange">Music Lounge</p>
                
        <Main/>  
        <Directory/>
        <Deals/>
      </div>
    );
}

export default HomePage;