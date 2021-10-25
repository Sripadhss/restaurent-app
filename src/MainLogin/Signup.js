import React from 'react'
import facebook from '../images/facebooklogo.png'
import twitter from '../images/twitterlogo.png'

const Signup = () =>
{
    return(
        <div id="Signup-component"> <br/>
        Connect with 
       <a href="www.facebook.com"><img src={facebook} height="30" width="50"/></a>
        
        <a href="www.twitter.com"><img src={twitter} height="30" width="50"/></a>
        <br/><br/><br/>
        </div>
    )
}
export default Signup;