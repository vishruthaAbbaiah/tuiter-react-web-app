const PostSummaryItem = (post) => {
   return(`
                     <li class="list-group-item">
                                         <div class="row">
                                             <div class="col-10 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                                                 <div class="text-secondary">
                                                     ${post.topic}
                                                 </div>
                                                 <div>
                                                     <span>
                                                         <strong>${post.userName}</strong>
                                                     <i class="fas fa-check-circle"></i>
                                                     </span>
                                                     <span class="text-secondary">
                                                         ${post.time}
                                                     </span>


                                                 </div>
                                                 <div>
                                                     <strong>${post.title}</strong>
                                                 </div>
                                             </div>
                                             <div class="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 align-self-center">
                                                 <img src="${post.image}" class="card-img-top"/>
                                             </div>

                                         </div>

                                     </li>

   `);
}
export default PostSummaryItem;