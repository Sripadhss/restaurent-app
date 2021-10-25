import React from "react";
import Dairy from './child-component/menu-item/dairy'
import Veggies from './child-component/menu-item/veggies'
import Fruits from './child-component/menu-item/fruits'
import GeneralItems from './child-component/menu-item/generalitems'
import Beverages from './child-component/menu-item/beverages'
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import MainLogin from './MainLogin/Login'






import HomePage from "./pages/homepage/homepage.component";
  export default function App() {
    return (
      <div classname="App">
          

<Route exact path="/">
 <HomePage/>
        </Route>
        <Route exact path="/Login">
 <MainLogin/>
        </Route>
    <Switch>
    <Route exact path="/Deserts" >
      <Dairy />
    </Route>
    <Route exact path="/Biryani">
        <Veggies />
    </Route>
    <Route exact path="/Starters">
        <Fruits />
    </Route>
    <Route exact path="/Alcohol">
        <GeneralItems />
    </Route>
    <Route exact path="/beverages">
        <Beverages />
    </Route>
    <Route path="/" Component={HomePage}></Route>
</Switch>

      </div>
    )
    }
