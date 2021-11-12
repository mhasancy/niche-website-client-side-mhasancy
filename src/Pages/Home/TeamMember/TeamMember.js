//imported file
import React from "react";
import { Link } from "react-router-dom";

//team member component
const TeamMember = ({ teamDataSingle }) => {
  //destructuring props
  const { name, imgUrl, designation } = teamDataSingle;
  return (
    <>
      <div
        className=" d-block d-md-none col container"
        style={{ width: "20rem" }}
      >
        <div className="card border-card h-100 radius-card overflow-hidden">
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title pb-3 text-dark">{name}</h5>

            <p className="card-title fs-5 pb-3 text-dark">{designation}</p>

            <div className="mb-3 fs-3 gradient-txt">
              <span>
                <Link to="/">
                  <i className="fab fa-twitter-square me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i className="fab fa-linkedin me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i className="fab fa-facebook-square me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i className="fab fa-instagram-square"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-none d-md-block col container"
        style={{ width: "30rem" }}
      >
        <div className="card border-card h-100 radius-card overflow-hidden">
          <div className="row g-0">
            <div className="col-5">
              <img
                src={imgUrl}
                className="img-fluid"
                style={{ width: "200%", height: "100%" }}
                alt=""
              />
            </div>

            <div className="card-body col-7 text-start ps-5 pt-5">
              <h4 className="card-title">{name}</h4>
              <p className="card-title fs-5">{designation}</p>
              <div className="mb-3 fs-3 gradient-txt">
                <span>
                  <Link to="/">
                    <i className="fab fa-twitter-square me-2"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-linkedin me-2"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-facebook-square me-2"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <i className="fab fa-instagram-square"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
