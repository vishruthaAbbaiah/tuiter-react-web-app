import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">

            {
                postsArray.map((postItem, index) => <TuitItem post={postItem} index={index}/>)
            }

        </ul>
    );
}
export default TuitsList;