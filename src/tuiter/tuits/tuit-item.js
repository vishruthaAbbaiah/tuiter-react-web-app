import React from "react";
import {useDispatch} from "react-redux";
import TuitsStats from "./tuits-stats";
//import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post, index}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item" key={index}>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 col-lg-2 col-xl-1">

                        <img src={'../../images/' + post.image} className="card-img-top rounded-circle" style={{height:"50px", width:"50px"}}/>
                </div>

                <div className="col-10 col-sm-11 col-md-11 col-lg-10 col-xl-11 px-4">
                    <div className="row">
                        <div className="col">
                            <span>
                                 <strong>{post.userName}</strong>
                                 <i className="bi bi-check-circle-fill px-1 text-primary"></i>
                            </span>

                            <span>
                                {post.handle}
                            </span>

                            <span className="px-1">
                                · {post.time}
                            </span>

                            <span className="px-10">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {post.tuit}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TuitsStats post={post} index={index}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    );
}
export default TuitItem;