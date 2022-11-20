import React from "react";

import NavigationSidebar from "../navigation-sidebar";

import PostList from "../post";

import TuitsList from "../tuits/index.js"
import WhatsHappening from "./whats-happening";

function HomeComponent() {
   return(
   <>
       <div className="row">
            <div className="col">
                <WhatsHappening/>
                <TuitsList/>

            </div>
       </div>
   </>
   );
}

export default HomeComponent;