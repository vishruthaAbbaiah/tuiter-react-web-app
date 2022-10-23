import React from "react";
const PostSummaryItem = ({post, index}) => {
   return(
             <li className="list-group-item" key={index}>
                 <div className="row">
                     <div className="col-10 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                         <div className="text-secondary">
                             {post.topic}
                         </div>
                         <div>
                             <span>
                                 <strong>{post.userName}</strong>
                             <i className="bi bi-check-circle-fill px-1"></i>
                             </span>
                             <span className="text-secondary">
                                 {post.time}
                             </span>


                         </div>
                         <div>
                             <strong>{post.title}</strong>
                         </div>
                     </div>
                     <div className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 align-self-center">
                         <img src={post.image} className="card-img-top"/>
                     </div>

                 </div>
    
             </li>

   );
}
export default PostSummaryItem;