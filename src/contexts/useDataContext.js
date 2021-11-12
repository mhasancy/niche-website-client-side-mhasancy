//imported file
import axios from "axios";
import { useEffect, useState } from "react";

//data context for CRUD operations
const useDataContext = () => {
  //data state for CRUD operations
  const [productsData, setProductsData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [error, setError] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [reviewsData, setReviewsData] = useState([]);

  //delete users order
  const deleteOrder = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/orders/${_id}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingOrders = ordersData.filter(
              (order) => order?._id === _id
            );
            setOrdersData(remainingOrders);
            alert("Booking deleted successfully.");
          }
        })
        .catch((error) => setError(error));
    }
  };
  //delete products data
  const deleteProduct = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/products/${_id}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingProducts = productsData.filter(
              (order) => order?._id === _id
            );
            setProductsData(remainingProducts);
            alert("products deleted successfully.");
          }
        })
        .catch((error) => setError(error));
    }
  };
  //handle status change to approved
  const handleStatusUpdate = (_id) => {
    axios
      .put(`http://localhost:5000/orders/${_id}`, {
        status: "Shipped",
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setOrderStatus("Shipped");
        }
      })
      .catch((error) => setError(error));
  };

  //product data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProductsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //team data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/team")
      .then((response) => setTeamData(response?.data))
      .catch((error) => setError(error));
  }, []);
  //review data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => setReviewsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //blogs data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((response) => setBlogsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //individual order data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => setOrdersData(response?.data))
      .catch((error) => setError(error));
  }, []);

  return {
    productsData,
    ordersData,
    teamData,
    blogsData,
    deleteOrder,
    handleStatusUpdate,
    orderStatus,
    error,
    reviewsData,
    deleteProduct,
  };
};

export default useDataContext;
