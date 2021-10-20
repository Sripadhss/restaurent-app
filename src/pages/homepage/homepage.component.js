import React from 'react';
import Directory from '../../child-component/directory/directory.component'
import Main from '../../maincomponent/maincomponent'
import Deals from '../../child-component/deals/deals'

function HomePage() {
    return (
      <div className="homepage-component">
        <p>this is homepage component</p>
        <Main/>
        

        <Directory/>
        <Deals/>
      </div>
    );
}

export default HomePage;