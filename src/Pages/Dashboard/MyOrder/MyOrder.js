//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";

// my booking component
const MyOrder = ({ myOrderedItem }) => {
  //destructuring useAuth
  const { dataContext } = useAuth();
  const { deleteOrder } = dataContext;
  const {
    _id,
    serviceTitle,
    status,
    name,
    email,
    address,
    cell,
    duration,
    price,
  } = myOrderedItem;

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

      <td className="align-middle">
        <button
          className="btn btn-primary gradient-btn"
          onClick={() => deleteOrder(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;
