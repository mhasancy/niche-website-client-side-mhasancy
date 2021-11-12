//imported file
import React from "react";
import { Link } from "react-router-dom";

//Blog component
const Blog = ({ blogData }) => {
  //destructuring props
  const { title, date, imgUrl, comments } = blogData;
  return (
    <div className="col container" style={{ width: "20rem" }}>
      <div className="card border-card h-100 radius-card overflow-hidden">
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <Link to="/" className="text-decoration-none">
            <h5 className="card-title pb-3 text-dark">{title}</h5>
          </Link>
          <div className="mb-3">
            <span>
              <i className="far fa-calendar me-2"></i>
              {""}
              {date}
            </span>
            <span>
              <i className="far fa-comments ms-4 me-2"></i> {""}
              {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
