//imported file
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Review from "../Review/Review";
//reviews component
const Reviews = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { reviewsData } = dataContext;

  return (
    <Container>
      <Typography variant="h2" gutterBottom component="div">
        What people say.
      </Typography>
      <Box
        container
        sx={{ textAlign: "center" }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {reviewsData?.map((reviewData) => (
            <Review key={reviewData?._id} reviewData={reviewData}></Review>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Reviews;
