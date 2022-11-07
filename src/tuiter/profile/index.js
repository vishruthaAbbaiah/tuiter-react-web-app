import React from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

import NavigationSidebar from "../navigation-sidebar";

function ProfileComponent() {
    const profileState = useSelector((store) => store.profile )
    const navigate = useNavigate();
    return(
        <>
                    <div className="row">
                        <div className="col-2 col-sm-1 col-md-1 col-lg-2 col-xl-1 px-4">
                           <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className="col-10 col-sm-11 col-md-11 col-lg-10 col-xl-11 px-4">
                            <div className="row">
                                <div className="col">
                                    <strong>{profileState.firstName} {profileState.lastName}</strong>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    6,114 Tweets
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="position-relative">
                                <img className="mt-2" src={profileState.bannerPicture} width="100%"/>
                                <img className="position-absolute text-white wd-left rounded-circle"
                                     src={profileState.profilePicture} style={{height:"120px", width:"120px", bottom:"-55px"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="col">
                            <button type="button" className="btn btn-outline-secondary rounded-pill float-end me-2"
                                    onClick={() => {
                                        navigate("/tuiter/edit-profile")
                                    }}>
                                <strong>Edit Profile</strong>
                            </button>
                        </div>
                    </div>

                    <div className="row ps-3">
                        <div className="col">
                            <strong>{profileState.firstName} {profileState.lastName}</strong>
                        </div>

                    </div>
                    <div className="row ps-3 text-secondary">
                        <div className="col">
                            {profileState.handle}
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col">
                            {profileState.bio}
                        </div>
                    </div>

                    <div className="row px-3">
                        <div className="col text-secondary">
                            <span>
                                <i className="bi bi-geo-alt pe-2"></i>
                                    {profileState.location}
                            </span>
                            <span className="px-3">
                                <i className="bi bi-balloon pe-2"></i>
                                    Born {profileState.dateOfBirth}
                            </span>

                            <span className="px-3">
                                 <i className="bi bi-calendar3 pe-2"></i>
                                    {profileState.dateJoined}
                            </span>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="col">
                          <span>
                            <strong>{profileState.followingCount}</strong> Following
                          </span>
                            <span className="px-3">
                            <strong>{profileState.followersCount}</strong> Followers
                          </span>
                        </div>

                    </div>

        </>
    );
}

export default ProfileComponent;