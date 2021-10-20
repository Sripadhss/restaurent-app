import React from 'react';
import Menu from '../menucomponent/menu'
import './main.css'

function MainComponent() {
    return(
        <div className="Main-component"style={{
            backgroundColor: 'grey',
            padding : '100px 100px 100px',
      }}>
      <Menu/>
          </div>
    )
}
export default MainComponent