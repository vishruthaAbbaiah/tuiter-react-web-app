import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-tabs pt-2">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">For you</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="#">Trending</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="#">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="d-none d-md-inline">
                                        Entertainment
                                        </span>
                                    </a>
                                </li>

                            </ul>
                            <div className="position-relative">
                            <img className="mt-2" src="../../../images/Starship-Mk1-Day.jpg.webp" width="100%"/>
                                <h1 class="position-absolute bottom-0 left-0 text-white wd-left">SpaceX's Starship</h1>
                            </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;