import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
   return(
       <ul className="list-group">
        <li className="list-group-item" key="whoToFollow"><strong>Who to follow</strong></li>
                               {
                                  whoArray.map((whoItem, index) => <WhoToFollowListItem who={whoItem} index={index}/>)

                               }

       </ul>
   );
}
export default WhoToFollowList;