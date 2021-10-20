import './menu.css';
import React from 'react';
import Food from '../foodcomponent/Food'
import Drinks from '../drinkscomponent/Drinks'

function Menu() { 
        
    return(
        
        <div className = 'Menu-component' style={{textalign:"center",
            backgroundColor: 'White',width: '40%',height: '100%'
        }}>
            
             <div id = 'Menuinside-component' style={{
            backgroundColor: 'maroon',
            padding: '10px 20px 20px',
            }}>
             
            <span><i class="fa fa-regular fa-arrow-left" style={{color:'white',padding:'5px',
            float: 'left',fontSize: 'x-large'
            }}
            ></i></span>
            <h3 style={{color:'white',display:'table-cell',padding:'0px 20px',fontSize: 'x-large'}}>MENU</h3>
            <i class="fa fa-regular fa-sliders" style={{ color:'white',float: 'right',fontSize: 'x-large'}}></i>

            <div id='vertical-buttton' style={{ color:'yellow',fontSize: '12', width:'10px', height:'10px'}}><i class="fa fas fa-ellipsis-stroke-vertical"></i></div>

            
            </div> 
            <Food/>
            <Drinks/>
            </div>
    )
}
export default Menu;