import React from "react";
import post from "./posts.json"
import PostSummaryItem from "./post-summary-item.js";

const PostSummaryList = () => {
   return(
       <ul className="list-group">

                               {
                                  post.map((postItem, index) => <PostSummaryItem post={postItem} index={index}/>)
                               }

       </ul>
   );
}
export default PostSummaryList;