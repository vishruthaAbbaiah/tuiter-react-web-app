import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
   return(`
       <ul class="list-group">
        <li class="list-group-item"><strong>Who to follow</strong></li>
                               ${
                                  who.map(whoItem => {
                                     return(WhoToFollowListItem(whoItem));
                                  }).join('')
                               }

       </ul>
   `);
}
export default WhoToFollowList;