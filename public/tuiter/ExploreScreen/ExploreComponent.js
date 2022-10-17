import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                           <div class="col-11 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                               <div class="position-relative">
                                   <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                                   <span class="position-absolute wd-search-icon"><i class="fas fa-search"></i></span>
                               </div>
                           </div>
                           <div class="col-1 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                               <i class="fas fa-cog fa-2x text-primary"></i>
                           </div>

                       </div>


                       <ul class="nav nav-tabs pt-2">
                           <li class="nav-item">
                               <a class="nav-link active" href="#">For you</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">Trending</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">News</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">Sports</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" href="#">
                                   <span class="d-none d-md-inline">
                                   Entertainment
                                   </span>
                               </a>
                           </li>

                       </ul>
                       <div class="position-relative">
                       <img class="mt-2" src="../../images/Starship-Mk1-Day.jpg.webp" width="100%"/>
                           <h1 class="position-absolute bottom-0 left-0 text-white wd-left">SpaceX's Starship</h1>
                       </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

