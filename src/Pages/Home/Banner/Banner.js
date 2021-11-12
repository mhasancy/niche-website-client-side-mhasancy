//imported file
import React from "react";

//banner component
const Banner = () => {
  return (
    <div
      style={{ height: "550px" }}
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p
            style={{
              height: "550px",
              background: `url("https://i.imgur.com/ZSQZG8Q.jpeg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="d-block img-fluid w-100"
          />
          <div className="carousel-caption text-start card-img-overlay">
            <div className="mt-5">
              <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <h1
                style={{ fontSize: "2.5rem" }}
                className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
              >
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <div>
                <p
                  style={{ height: "200px" }}
                  className="d-none d-md-block col-12 mt-4 col-md-6 fw-light text-white fs-4 text-start lh-base "
                >
                  Sooner or later we must realize there is no station, no one
                  place to arrive at once and for all. The true joy of life is
                  the trip. <br />— Robert J. Hastings
                </p>
                <p className="d-block d-md-none col-12 col-md-6 fw-light text-white fs-4 text-start lh-base ">
                  Sooner or later we must realize there is no station, no one
                  place to arrive at once and for all. The true joy of life is
                  the trip.
                </p>
              </div>
              <span className="text-start ">
                <a
                  href="#services"
                  className="btn btn-primary fw-bold gradient-btn rounded-3 px-3 mt-3"
                >
                  <i className="far fa-bookmark"></i> Book Now
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <p
            style={{
              height: "550px",
              background: `url("https://i.imgur.com/6kdVS8j.jpeg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="d-block img-fluid w-100"
          />
          <div className="carousel-caption text-start card-img-overlay">
            <div className="mt-5">
              <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <h1
                style={{ fontSize: "2.5rem" }}
                className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
              >
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <div>
                <p
                  style={{ height: "200px" }}
                  className="d-none d-md-block col-12 col-md-6 mt-4 fw-light text-white fs-4 text-start lh-base "
                >
                  The trail is the thing, not the end of the trail. Travel too
                  fast and you miss all you are traveling for. <br />— Louis
                  L’Amour
                </p>
                <p className="d-block d-md-none col-12 col-md-6 fw-light text-white fs-4 text-start lh-base ">
                  The trail is the thing, not the end of the trail. Travel too
                  fast and you miss all you are traveling for.
                </p>
              </div>
              <span className="text-start ">
                <a
                  href="#services"
                  className="btn btn-primary fw-bold gradient-btn rounded-3 px-3 mt-3"
                >
                  <i className="far fa-bookmark"></i> Book Now
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <p
            style={{
              height: "550px",
              background: `url("https://i.imgur.com/ZSVqjT5.jpeg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="d-block img-fluid w-100"
          />
          <div className="carousel-caption text-start card-img-overlay">
            <div className="mt-5">
              <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <h1
                style={{ fontSize: "2.5rem" }}
                className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
              >
                Start Your Journey
                <span className="gradient-txt"> .</span>
              </h1>
              <div>
                <div>
                  <p
                    style={{ height: "200px" }}
                    className="d-none d-md-block col-12 col-md-6 mt-4 fw-light text-white fs-4 text-start lh-base "
                  >
                    I wandered everywhere, through cities and countries wide.
                    And everywhere I went, the world was on my side. <br />―
                    Roman Payne
                  </p>
                  <p className="d-block d-md-none col-12 col-md-6 fw-light text-white fs-4 text-start lh-base ">
                    I wandered everywhere, through cities and countries wide.
                    And everywhere I went, the world was on my side.
                  </p>
                </div>
              </div>
              <span className="text-start ">
                <a
                  href="#services"
                  className="btn btn-primary fw-bold gradient-btn rounded-3 px-3 mt-3"
                >
                  <i className="far fa-bookmark"></i> Book Now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
