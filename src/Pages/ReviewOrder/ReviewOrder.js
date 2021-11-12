//imported file
import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//ReviewOrder component
const ReviewOrder = () => {
  //dynamic route data set
  const { orderId } = useParams();
  //react hook form
  const { register, handleSubmit, reset } = useForm();
  //destructuring with auth and context
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { productsData } = dataContext;
  //matchedService
  const matchedService = productsData?.find(
    (serviceData) => serviceData?._id === orderId
  );
  //data post to server
  const onSubmit = (data) => {
    axios
      ?.post("http://localhost:5000/orders", {
        ...data,
        serviceTitle: matchedService?.title,
        orderId: orderId,
        status: "Pending",
        imgUrl: matchedService?.imgUrl,
        duration: matchedService?.duration,
        price: matchedService?.price,
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Tour booked successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container radius-card mt-5 pt-1 pb-5 px-5">
      <Typography component="h1" variant="h5">
        Book Your Tour
      </Typography>

      <Typography component="p" variant="p">
        Add new tour plan by providing Name, Email, Number and Address.
      </Typography>

      {matchedService ? (
        <div className="row row-cols-1 row-cols-md-2 mx-auto ">
          <div className="col">
            <div className="card border-card">
              <img
                style={{ height: "25rem" }}
                src={matchedService?.imgUrl}
                className="card-img-top d-none d-md-block img-fluid"
                alt=""
              />
              <img
                style={{ height: "15rem" }}
                src={matchedService?.imgUrl}
                className="d-block d-md-none card-img-top img-fluid"
                alt=""
              />
              <div className="card-body">
                <h4
                  style={{ fontSize: "30px" }}
                  className="d-block d-md-none card-title fw-bold"
                >
                  {matchedService?.title}
                </h4>
                <h4 className="d-none d-md-block card-title fw-bold">
                  {matchedService?.title}
                </h4>
                <p className="card-text fs-5 fw-light px-4">
                  {matchedService?.intro}.
                </p>

                <p className="d-none d-md-block card-text fs-5">
                  <span className="card-text">
                    <strong>$ {matchedService?.price}</strong>{" "}
                    <span className="text-lighter">/ person</span>
                  </span>
                  <span className="card-text">
                    <i className="far fa-calendar-alt me-2 ms-5"> </i>
                    {""}
                    {matchedService?.duration}
                  </span>
                </p>

                <p className="d-block d-md-none card-text fs-6">
                  <span className="card-text">
                    <strong>$ {matchedService?.price}</strong>{" "}
                    <span className="text-lighter">/ person</span>
                  </span>{" "}
                  <br />
                  <span className="card-text">
                    <i className="far fa-calendar-alt me-2 "> </i>
                    {""}
                    {matchedService?.duration}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <h5 className="d-none d-md-block text-center mx-auto pb-3 w-75 fw-bold">
              Fill up the form and submit to complete the booking.
            </h5>
            <h5 className="pt-4 d-block d-md-none text-center mx-auto pb-3  fw-bold">
              Fill up the form and submit to complete the booking.
            </h5>
            <div className="ms-3 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <p className="text-start">Name</p>
                  <input
                    defaultValue={user?.displayName}
                    {...register("name", { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Email</p>
                  <input
                    defaultValue={user?.email}
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Mobile No:</p>
                  <input
                    {...register("cell", { required: true })}
                    type="telephone"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Address</p>
                  <textarea
                    {...register("address", { required: true })}
                    type="text"
                    className="form-control border-card"
                  />
                </div>
                <button type="submit" className="btn btn-primary gradient-btn">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h5 className="fw-light pb-5">
            Please click home and find a tour plan and then click on respective
            book now .
          </h5>
          <Link to="/">
            <button className="btn btn-primary gradient-btn rounded-3 px-3 fw-bold">
              Home
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ReviewOrder;
