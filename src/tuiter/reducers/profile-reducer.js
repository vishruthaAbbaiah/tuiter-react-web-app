import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const initialState = {

    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: '../../images/neon-profile.jpg',
    bannerPicture: '../../images/banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223

};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        saveChanges(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {saveChanges} = profileSlice.actions;
export default profileSlice.reducer;