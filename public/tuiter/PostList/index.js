import pos from "./pos.js";
import PostItem from "./PostItem.js";

const PostList = () => {
   return(`
       <ul class="list-group">

                               ${
                                  pos.map(posItem => {
                                     return(PostItem(posItem));
                                  }).join('')
                               }

       </ul>
   `);
}
export default PostList;