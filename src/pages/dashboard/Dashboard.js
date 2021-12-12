import React from "react";
import Usernlinks from "../../components/User profile/Usernlinks";
import Faviteams from "../../components/User profile/Faviteams";
import Pagination from "../../components/User profile/Pagination";

function Dashboard() {
    return(
        <div>
            <div class="container">
          
          <div class="row">
            <div class="col-lg-4 "><Usernlinks /></div>
            <div class="col-lg-8 "><Faviteams /></div>
            {/* <Pagination  /> */}
            </div>
            </div>

            
        </div>
    )
}

export default Dashboard;