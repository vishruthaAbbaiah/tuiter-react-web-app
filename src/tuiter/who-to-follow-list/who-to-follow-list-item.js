import React from "react";
const WhoToFollowListItem = ({who, index}) => {
   return(
                       <li className="list-group-item" key={index}>
                           <div className="row">
                               <div className="col-2 col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                   <img src={who.avatarIcon} className="card-img-top rounded-circle"/>
                               </div>
                               <div className="col-7 col-sm-7 col-md-7 col-lg-5 col-xl-7">
                                   <strong>{who.userName}</strong>
                                   <i className="bi bi-check-circle-fill ps-1"></i>
                                   <div>
                                       {who.handle}
                                   </div>
                               </div>
                               <div className="col-3 col-sm-3 col-md-3 col-lg-4 col-xl-3">
                                   <button type="button" className="btn btn-primary rounded-pill me-2">
                                       Follow</button>
                               </div>
                           </div>
                       </li>

   );
}
export default WhoToFollowListItem;