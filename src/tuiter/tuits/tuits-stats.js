import React from "react";
const TuitsStats = ({post, index}) => {
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

                <i className={`${post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}`}></i>
                <span className="p-2">{post.likes}</span>
            </div>
            <div className="col text-secondary">
                <i className="bi bi-share"></i>

            </div>
        </div>



    )
}
export default TuitsStats