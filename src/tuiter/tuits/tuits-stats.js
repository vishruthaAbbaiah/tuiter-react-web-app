import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitsStats = ({post, index}) => {
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col text-secondary">

                <i className="bi bi-chat"></i>
                <span className="p-2">{post.replies}</span>
            </div>
            <div className="col text-secondary">

                <i className="bi bi-arrow-repeat"></i>
                <span className="p-2">{post.retuits}</span>
            </div>

            <div className="col text-secondary">
                <i onClick={() => {
                    const updates = {
                        ...post,
                      likes: post.likes + 1,
                      liked: true
                    };
                    dispatch(updateTuitThunk(updates));
                }}
                   className={`${post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}`}></i>
                <span className="p-2">{post.likes}</span>
            </div>
            <div className="col text-secondary">
                <i onClick={() => {
                    const updates = {
                        ...post,
                        unlikes: post.unlikes + 1,

                    };
                    dispatch(updateTuitThunk(updates));
                }}
                   className="bi bi-hand-thumbs-down-fill"></i>
                <span className="p-2">{post.unlikes}</span>
            </div>
            <div className="col text-secondary">
                <i className="bi bi-share"></i>

            </div>
        </div>



    )
}
export default TuitsStats