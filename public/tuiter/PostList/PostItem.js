const getImagePost = (pos) => {
if(pos.imageHeading){
return(`
<div class ="row px-3 pt-2">
                        <div class="col-11 offset-1 border rounded border-secondary p-0">

                            <span>
                            <img src="${pos.postImage}" class="card-img-top rounded-top border-bottom border-secondary" width="100%"/>
                            </span>
                            <div class = "p-2">
                            <div>
                               ${pos.imageHeading}

                            </div>
                            <div class="text-secondary">
                            ${pos.imageDesc}
                            </div>

                            </div>
                        </div>
                   </div>


`)
}
else {
return(`
<div class ="row px-3 pt-2">
                        <div class="col-11 offset-1 border rounded border-secondary p-0">

                            <span>
                            <img src="${pos.postImage}" class="card-img-top rounded border border-secondary" width="100%"/>
                            </span>



                        </div>
                   </div>

`)


}


}



const PostItem = (pos) => {
   return(`
                <li class="list-group-item">
                    <div class="row">
                         <div class="col-1 col-sm-2 col-md-1 col-lg-1 col-xl-1" style="padding-right:0">
                             <img src="${pos.image}" class="card-img-top rounded-circle" height="40px" width="40px"/>
                         </div>
                         <div class="col-11 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                            <div class="row">


                              <div class="col-11">
                                      <span>
                                              <strong>${pos.topic}</strong>
                                      </span>
                                      <i class="fas fa-check-circle"></i>
                                      <span class="text-secondary">
                                         ${pos.userName}
                                          · ${pos.time}
                                      </span>
                              </div>



                         <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                  <span class = "text-secondary">
                                     <i class="fas fa-ellipsis-h"></i>
                                  </span>
                         </div>

                         </div>
                         <div class="row">
                            <div class="col">
                                <div>
                                       <span>
                                          ${pos.title}

                                       </span>
                                       <span class="text-primary">
                                        ${pos.link}
                                       </span>
                               </div>

                            </div>


                         </div>
                    </div>

                    </div>
                    ${getImagePost(pos)}


                    <div class="row px-3 py-3">
                    <div class="col offset-1 text-secondary p-0">

                        <i class="far fa-comment"></i>
                            <span class="p-2">${pos.comment}</span>
                    </div>
                    <div class="col text-secondary">

                        <i class="fas fa-retweet"></i>
                            <span class="p-2">${pos.retweet}</span>
                    </div>

                    <div class="col text-secondary">

                        <i class="far fa-heart"></i>
                            <span class="p-2">${pos.likes}</span>
                    </div>
                    <div class="col text-secondary">

                        <i class="fas fa-share-square"></i>

                    </div>






                </div>



                </li>
   `);
}
export default PostItem;