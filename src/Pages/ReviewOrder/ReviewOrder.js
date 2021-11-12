//imported file
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
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
  const matchedProducts = productsData?.find(
    (ProductData) => ProductData?._id === orderId
  );
  //data post to server
  const onSubmit = (data) => {
    axios
      ?.post("http://localhost:5000/orders", {
        ...data,
        productTitle: matchedProducts?.title,
        orderId: orderId,
        status: "Pending",
        imgUrl: matchedProducts?.imgUrl,
        price: matchedProducts?.price,
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
    <Container>
      <Typography component="h1" variant="h5">
        Place Your Order
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          columns={14}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={matchedProducts?.imgUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {matchedProducts?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {matchedProducts?.intro}
                </Typography>
              </CardContent>
              <CardActions>
                {matchedProducts?.price}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid justifyContent="space-around" alignItems="center" md={12}>
              <Typography component="p" variant="p">
                Place order by providing Name, Email, Number and Address.
              </Typography>
            </Grid>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={14} md={12}>
                  <TextField
                    defaultValue={user?.displayName}
                    {...register("name", { required: true })}
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={14} md={12}>
                  <TextField
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={14} md={12}>
                  <TextField
                    {...register("address", { required: true })}
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    multiline
                    rows={2}
                  />
                </Grid>

                <Grid item xs={14} md={12}>
                  <TextField
                    {...register("cell", { required: true })}
                    autoComplete="telephone"
                    name="cell"
                    required
                    type="tel"
                    fullWidth
                    id="cell"
                    label="Mobile No."
                    autoFocus
                  />
                </Grid>
                <Grid item xs={14} md={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewOrder;
