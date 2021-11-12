//imported file
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import useAuth from "../../../hooks/useAuth";

//MyOrders component
const MyOrders = () => {
  //destructuring data from useAuth
  const { dataContext, firebaseContext } = useAuth();
  //destructuring
  const { ordersData, deleteOrder, handleStatusUpdate } = dataContext;
  const { user } = firebaseContext;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //filtering my orders data
  const myOrderedItems = ordersData?.filter(
    (myOrderedItem) => myOrderedItem.email === user.email
  );
  const rows = myOrderedItems;
  return (
    <Paper className="container" sx={{ maxWidth: "85vw", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
        <Table
          sx={{ overflowX: "auto" }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Product Info</TableCell>
              <TableCell>Order Info</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                ({
                  _id,
                  name,
                  email,
                  cell,
                  address,
                  productTitle,
                  productId,
                  status,
                  price,
                }) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                      <TableCell>
                        {productTitle}
                        {price}
                      </TableCell>

                      <TableCell align="left">
                        Name: {name}
                        email: {email}
                        cell: {cell}
                        Address: {address}
                      </TableCell>
                      <TableCell align="right">{status}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Delete" arrow>
                          <IconButton onClick={() => deleteOrder(_id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    // <div className="radius-card container mt-5 pt-1 pb-5 px-5">
    //   <h1 className="fw-bold d-none d-md-block text-center  mt-5 ">
    //     Manage Your Booked Tour
    //     <span className="gradient-txt">.</span>
    //   </h1>
    //   <h1
    //     style={{ fontSize: "2.3rem" }}
    //     className="fw-bold d-block d-md-none text-center  mt-5 "
    //   >
    //     Manage Your Booked Tour
    //     <span className="gradient-txt">.</span>
    //   </h1>
    //   <p className="text-center w-75 mx-auto ">
    //     Here you can know your total booked items, booking status and also can
    //     delete respective booking.
    //   </p>
    //   <p className="fs-4">
    //     {" "}
    //     <strong>Total Bookings</strong>: {myOrderedItems?.length}
    //   </p>
    //   <div className="table-responsive-md">
    //     <table className="table table-bordered border-card">
    //       <thead>
    //         <tr>
    //           <th style={{ width: "200px" }} scope="col align-middle">
    //             Tour Info
    //           </th>
    //           <th style={{ width: "650px" }} scope="col align-middle">
    //             Booking Info
    //           </th>
    //           <th style={{ width: "130px" }} scope="col align-middle">
    //             Status
    //           </th>
    //           <th style={{ width: "150px" }} scope="col align-middle">
    //             Action
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {myOrderedItems?.map((myOrderedItem) => (
    //           <MyOrder
    //             myOrderedItem={myOrderedItem}
    //             key={myOrderedItem?._id}
    //           ></MyOrder>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default MyOrders;
