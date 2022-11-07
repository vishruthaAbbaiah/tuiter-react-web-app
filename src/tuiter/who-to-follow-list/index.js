import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

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