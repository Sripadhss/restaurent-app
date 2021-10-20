import React from 'react';
import {Link, Route, Switch,} from 'react-router-dom'
import Dairy from './dairy'
import Veggies from './veggies'
import Fruits from './fruits'
import Beverages from './beverages'
import GeneralItems from './generalitems'




function MenuItem(props){
    console.log(props);
    return(
        <div className='MenuItem'>
            <nav>
        <Link to={props.categoryname.linkUrl}><h1>{props.categoryname.name}</h1></Link>
        <div id="img1">
            <img src= {props.categoryname.imageUrl} height={250} width={250} align="centre" />
        </div>
        </nav>
        <Switch>
            <Route exact path="/dairy">
            <Dairy />
            </Route>
            <Route exact path="/veggies">
            <Veggies />
            </Route>
            <Route exact path="/fruits">
            <Fruits />
            </Route>
            <Route exact path="/generalitems">
            <GeneralItems />
            </Route>
            <Route exact path="/beverages">
            <Beverages />
            </Route>
        </Switch>
        </div>
    )
}
export default MenuItem;