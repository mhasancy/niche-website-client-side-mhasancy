//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";

//managing single booking component
const ManageOrder = ({ orderData }) => {
  //destructuring
  const { dataContext } = useAuth();
  const { deleteOrder, handleStatusUpdate } = dataContext;
  const {
    serviceTitle,
    name,
    email,
    status,
    _id,
    address,
    cell,
    price,
    duration,
  } = orderData;
  return (
    <tr>
      <td className="align-middle">
        <h6 className="mx-auto text-center pb-2">
          <strong>{serviceTitle}</strong>
        </h6>
        <p>
          <small className="card-text fs-6">
            <strong>$ {price}</strong>{" "}
            <span className="text-lighter">/ person</span>
          </small>{" "}
          <br />
          <small className="card-text">
            <i className="far fa-calendar-alt me-2 ms-3"> </i>
            {""}
            {duration}
          </small>
        </p>
      </td>
      <td className="text-start ps-4 align-middle">
        <strong>Name</strong>: {name} <br />
        <strong>Email</strong>: {email} <br />
        <strong>Cell</strong>: {cell}
        <br />
        <strong>Address</strong>: {address}
      </td>
      <td className="align-middle">{status}</td>

      <td>
        <button
          className="btn btn-primary gradient-btn"
          onClick={() => deleteOrder(_id)}
        >
          Delete
        </button>{" "}
        <br /> <br />
        {status === "Approved" ? (
          <button className="btn btn-primary gradient-btn" disabled>
            Approved
          </button>
        ) : (
          <button
            className="btn btn-primary gradient-btn"
            onClick={() => handleStatusUpdate(_id)}
          >
            Approve
          </button>
        )}
      </td>
    </tr>
  );
};
export default ManageOrder;
