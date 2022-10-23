import React from "react";

import NavigationSidebar from "../navigation-sidebar";

import PostList from "../post";

import PostSummaryList from "../post-summary-list"

function HomeComponent() {
   return(
   <>
       <div className="row">
            <div className="col">
                <PostList/>

            </div>
       </div>
   </>
   );
}

export default HomeComponent;