import React from "react";
import post from "./pos.json";
import PostItem from "./post-item.js";

const PostList = () => {
   return(
       <ul className="list-group">
           {
              post.map((posItem,index) => <PostItem pos={posItem} index={index}/>)
           }
       </ul>
   );
}
export default PostList;