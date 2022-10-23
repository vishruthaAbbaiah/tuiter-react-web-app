import React from "react";
const getImagePost = (pos) => {
if(pos.imageHeading){
return(
<div className ="row px-3 pt-2">
                        <div className="col-11 offset-1 border rounded border-secondary p-0">

                            <span>
                            <img src={pos.postImage} className="card-img-top rounded-top border-bottom border-secondary" width="100%"/>
                            </span>
                            <div className = "p-2">
                            <div>
                               {pos.imageHeading}

                            </div>
                            <div className="text-secondary">
                            {pos.imageDesc}
                            </div>

                            </div>
                        </div>
                   </div>


)
}
else {
return(
<div className ="row px-3 pt-2">
                        <div className="col-11 offset-1 border rounded border-secondary p-0">

                            <span>
                            <img src={pos.postImage} className="card-img-top rounded border border-secondary" width="100%"/>
                            </span>



                        </div>
                   </div>

)


}
}

const PostItem = ({pos,index}) => {
   return(
        <li className="list-group-item" key={index}>
            <div className="row">
                 <div className="col-1 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                     <img src={pos.image} className="card-img-top rounded-circle" height="35px" width="40px"/>
                 </div>
                 <div className="col-11 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                     <div className="row">
                          <div className="col-11">
                              <span>
                                      <strong>{pos.topic}</strong>
                              </span>
                              <i className="bi bi-patch-check-fill text-primary px-1"></i>
                              <span className="text-secondary">
                                 {pos.userName}
                                   · {pos.time}
                              </span>
                          </div>
                         <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                  <span className = "text-secondary">
                                     <i className="bi bi-three-dots"></i>
                                  </span>
                         </div>
                     </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                   <span>
                                      {pos.title}
                                   </span>
                                   <span className="text-primary">
                                    {pos.link}
                                   </span>
                           </div>
                        </div>
                     </div>
                 </div>

            </div>
            {pos.imageHeading && <div className ="row px-3 pt-2">
                                                         <div className="col-11 offset-1 border rounded border-secondary p-0">

                                                             <span>
                                                             <img src={pos.postImage} className="card-img-top rounded-top border-bottom border-secondary" width="100%"/>
                                                             </span>
                                                             <div className = "p-2">
                                                             <div>
                                                                {pos.imageHeading}

                                                             </div>
                                                             <div className="text-secondary">
                                                             {pos.imageDesc}
                                                             </div>

                                                             </div>
                                                         </div>
                                                    </div>}

            {!pos.imageHeading && <div className ="row px-3 pt-2">
                                                          <div className="col-11 offset-1 border rounded border-secondary p-0">

                                                              <span>
                                                              <img src={pos.postImage} className="card-img-top rounded border border-secondary" width="100%"/>
                                                              </span>



                                                          </div>
                                                     </div>}


            <div className="row px-3 py-3">
                <div className="col offset-1 text-secondary p-0">

                    <i className="bi bi-chat"></i>
                        <span className="p-2">{pos.comment}</span>
                </div>
                <div className="col text-secondary">

                    <i className="bi bi-arrow-left-right"></i>
                        <span className="p-2">{pos.retweet}</span>
                </div>

                <div className="col text-secondary">

                    <i className="bi bi-heart"></i>
                        <span className="p-2">{pos.likes}</span>
                </div>
                <div className="col text-secondary">

                    <i className="bi bi-upload"></i>

                </div>
            </div>
        </li>
   );
}
export default PostItem;