import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import NavigationSidebar from "../navigation-sidebar";
import {saveChanges} from "../reducers/profile-reducer";

function EditProfileComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profileState = useSelector((store) => store.profile )
    const [firstName, setFirstName] = useState(profileState.firstName);
    const [lastName, setLastName] = useState(profileState.lastName);
    const [bio, setBio] = useState(profileState.bio);
    const [location, setLocation] = useState(profileState.location);
    const [website, setWebsite] = useState(profileState.website);
    const [dateOfBirth, setDateOfBirth] = useState(profileState.dateOfBirth);
    const [editFlag, setEditFlag] = useState(true);

    const editCondition = (edit) => {
        if(edit) {
            return (<button type="button"
                            className="btn btn-link"
                            onClick={() => setEditFlag(!editFlag)}
            >
                Edit
            </button>);
        } else {
            return (<button type="button"
                            className="btn btn-link"
                            onClick={() => setEditFlag(!editFlag)}
            >
                Done</button>);
        }
    };
    const editHandler = (editflag) => {
        const editText = editflag;
        if(editText) {
            return (<p>{dateOfBirth}</p>)
        }
        else{
            return(<input type="date"
                          value={dateOfBirth}
                          onChange={(e) => {
                              setDateOfBirth(e.target.value)
                          }}
            />)
        }

    }



    const saveHandler = () => {
        const changes = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        dispatch(saveChanges(changes));
        navigate("/tuiter/profile");
    }
    const cancelHandler = () => {
        navigate("/tuiter/profile");
    }

    return(
        <>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 col-lg-2 col-xl-1 px-4">
                    <i className="bi bi-x-lg" onClick={cancelHandler}></i>
                </div>
                <div className="col-8 col-sm-9 col-md-9 col-lg-8 col-xl-9 px-4">
                            <strong><h4>Edit Profile</h4></strong>
                </div>
                        <div className="col-2 col-sm-1 col-md-1 col-lg-2 col-xl-1 px-4">
                            <button type="button"
                                    onClick={saveHandler}
                                    className="btn btn-dark rounded-pill">Save</button>
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
            <br/><br/><br/>
            <div className="row ps-3">
                <div className="col">
                    <label htmlFor="FirstName">First Name:</label>
                    <input type="text"
                           value={firstName}
                           onChange={(e) => {
                               setFirstName(e.target.value)
                           }}
                           className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row ps-3">
                <div className="col">
                    <label htmlFor="Lastname">Last Name:</label>
                    <input type="text"
                           value={lastName}
                           onChange={(e) => {
                               setLastName(e.target.value)
                           }}
                           className="form-control"/>
                </div>
            </div>

            <br/>

            <div className="row ps-3">
                <div className="col">
                    <label htmlFor="Bio">Bio:</label>
                    <textarea  placeholder="Bio"
                               value={bio}
                               onChange={(e) => {
                                   setBio(e.target.value)
                               }}
                              className="form-control"/>
                </div>
            </div>

            <br/>

            <div className="row ps-3">
                <div className="col">
                    <label htmlFor="Location">Location:</label>
                    <input type="text"
                           value={location}
                           onChange={(e) => {
                               setLocation(e.target.value)
                           }}
                           className="form-control"/>
                </div>
            </div>

            <br/>

            <div className="row ps-3">
                <div className="col">
                    <label htmlFor="Website">Website:</label>
                    <input type="text"
                           value={website}
                           onChange={(e) => {
                               setWebsite(e.target.value)
                           }}
                           className="form-control"/>
                </div>
            </div>

            <br/>

            <div className="row ps-3">
                <div className="col-12">
                    <label htmlFor="Birthdate">Birthdate:</label>
                    {editCondition(editFlag)}
                </div>
                <div className="col-12">
                    {editHandler(editFlag)}
                </div>
            </div>

        </>
    );
}

export default EditProfileComponent;