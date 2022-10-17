const WhoToFollowListItem = (who) => {
   return(`
                       <li class="list-group-item">
                           <div class="row">
                               <div class="col-2 col-sm-2 col-md-2 col-lg-3 col-xl-2">
                                   <img src=${who.avatarIcon} class="card-img-top rounded-circle"/>
                               </div>
                               <div class="col-7 col-sm-7 col-md-7 col-lg-5 col-xl-7">
                                   <strong>${who.userName}</strong>
                                   <i class="fas fa-check-circle"></i>
                                   <div>
                                       ${who.handle}
                                   </div>
                               </div>
                               <div class="col-3 col-sm-3 col-md-3 col-lg-4 col-xl-3">
                                   <button type="button" class="btn btn-primary rounded-pill me-2">
                                       Follow</button>
                               </div>
                           </div>
                       </li>

   `);
}
export default WhoToFollowListItem;