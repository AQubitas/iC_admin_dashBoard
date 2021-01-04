import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../screens/welcome";
import BeforeHeader from "../headers/beforeHeader";
const AppRouter =()=>{
    return(
       <BrowserRouter>
       <BeforeHeader/>
       <Switch>
           <Route path="/" component={Welcome} exact/>
           <Route path="/login" component={Welcome} exact/>
       </Switch>
       </BrowserRouter>
    )
}
export default AppRouter;