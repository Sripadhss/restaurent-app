import React from 'react';
import ReactRoundedImage from "react-rounded-image";

function DrinksComp() {
    return(
        
        <div className="Drinks-component" style={{textAlign: 'center',
            alignItems : 'center',
            alignContent : 'center',
            padding : '5px 110px 2px'}}>    


          <div className="Water-component" style={{
            display: 'flex',
            flexDirection:'row',
            padding : '10px 10px 10px'}}>   
            <ReactRoundedImage image={"water.jpeg"} id="Waterimg" roundedSize="0" imageWidth="75" imageHeight="75" />
               <table><td style={{
                 padding : '10px 10px 10px',
                 borderradius:'50px'}}>
                   <b style={{display:'table'}}>Water</b><tr Style={{color: 'grey'}}>Non-Alcoholic</tr></td>
                </table>
            </div>


          <div className="ThickShake-component" style={{
            display: 'flex',
            flexDirection: 'row',
            padding : '10px 10px 10px'}}> 
            <ReactRoundedImage image={"thickshake.jpeg"} roundedSize="0" imageWidth="75" imageHeight="75" />
                <table><td style={{
                 padding : '10px 10px 10px',
                 borderradius:'50'}}>
                   <b style={{display:'table'}}>Thick Shakes</b><tr Style={{color: 'grey'}}>Non-Alcoholic</tr></td>
                </table>
            </div>


          <div className="CoolDrinks-component" style={{
            display: 'flex',
            flexDirection: 'row',
            padding:'10px 10px 10px'}}> 
            <ReactRoundedImage image={"cooldrinks.png"} roundedSize="0" imageWidth="75" imageHeight="75" />
                <table><td style={{
                 padding : '10px 10px 10px',
                 borderradius:'50'}}>
                   <b style={{display:'table'}}>Cool Drinks</b><tr Style={{color: 'grey'}}>Non-Alcoholic</tr></td>
                </table>
           </div>

          <div className="CoolDrinks-component" style={{
            display: 'flex',
            flexDirection: 'row',
            padding:'10px 10px 10px'}}> 
            <ReactRoundedImage image={"beer.jpeg"} roundedSize="0" imageWidth="75" imageHeight="75" />
                <table><td style={{
                 padding : '10px 10px 10px',
                 borderradius:'50'}}>
                   <b style={{display:'table'}}>Beer</b><tr Style={{color: 'grey'}}>Alcoholic</tr></td>
                </table>
            </div>
        </div>

            )
    
}
export default DrinksComp;