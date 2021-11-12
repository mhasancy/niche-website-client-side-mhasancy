import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
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
const ManageOrders = () => {
  const { dataContext } = useAuth();
  //destructuring
  const { ordersData, deleteOrder, handleStatusUpdate } = dataContext;
  const rows = ordersData;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                        <Tooltip title="Shipped" arrow>
                          <IconButton onClick={() => handleStatusUpdate(_id)}>
                            <LocalShippingIcon />
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
  );
};
export default ManageOrders;
