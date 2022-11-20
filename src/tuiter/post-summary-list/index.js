import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item.js";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
   return(
       <ul className="list-group">

                               {
                                  postsArray.map((postItem, index) => <PostSummaryItem post={postItem} index={index}/>)
                               }

       </ul>
   );
}
export default PostSummaryList;