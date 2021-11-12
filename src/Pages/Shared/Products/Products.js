//imported file
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Product from "../Product/Product";

//Products component
const Products = () => {
  //destructuring data set
  const { dataContext } = useAuth();
  const { productsData } = dataContext;
  return (
    <Container>
      <Typography variant="h2" gutterBottom component="div">
        Pick your Watch
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        When it comes to exploring exotic places, the choices are numerous.
        Whether you like peaceful destinations or vibrant landscapes, we have
        offers for you.
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productsData?.map((productData) => (
            <Product key={productData?._id} productData={productData}></Product>
          ))}
        </Grid>
      </Box>
    </Container>
    // <div className=" container mx-auto my-5">
    //   <h1 className="d-none d-md-block fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3">
    //     Go Exotic Places
    //     <span className="gradient-txt"> .</span>
    //   </h1>

    //   <h1
    //     style={{ fontSize: "2.5rem" }}
    //     className="d-block d-md-none fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3"
    //   >
    //     Go Exotic Places
    //     <span className="gradient-txt"> .</span>
    //   </h1>
    //   <p className="text-center w-75 mx-auto mb-5">
    //     When it comes to exploring exotic places, the choices are numerous.
    //     Whether you like peaceful destinations or vibrant landscapes, we have
    //     offers for you.
    //   </p>
    //   {productsData?.length <= 0 ? (
    //     <div className="text-center">
    //       <div className="spinner-border" role="status"></div>
    //     </div>
    //   ) : (
    //     <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-auto ">
    //       {productsData?.map((serviceData) => (
    //         <Product key={serviceData?._id} serviceData={serviceData}></Product>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default Products;
