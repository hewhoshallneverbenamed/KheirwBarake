import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types


// Route Views
import Dashboard from "./pages/dashboard/Dashboard";
import Aboutus from "./components/Aboutus/Aboutus"
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
export default function Routes() {
    return(

<Route path="/about" component={Aboutus}
/>

    )
}