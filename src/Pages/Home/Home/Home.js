//imported file
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";

//home component
const Home = () => {
  const { dataContext } = useAuth();
  const { productsData } = dataContext;
  return (
    <div>
      <Header></Header>
      <Banner></Banner>

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
            {productsData
              .slice(0, 6)
              .map(({ _id, title, intro, imgUrl, duration, price }) => {
                return (
                  <Grid item xs={8} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={imgUrl}
                        alt=""
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {intro?.slice(0, 100)}
                        </Typography>
                        {price} {duration}
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Link to={`/review-order/${_id}`}>
                          {" "}
                          <Button size="small">
                            <ShoppingCartIcon />
                            Order Now
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>

      <Blogs></Blogs>
      <Reviews></Reviews>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;
