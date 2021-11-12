import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Review from "../Review/Review";

const Reviews = () => {
  const { dataContext } = useAuth();
  const { reviewsData } = dataContext;
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {reviewsData?.map((reviewData) => (
          <Review key={reviewData?._id} reviewData={reviewData}></Review>
        ))}
      </Box>
    </Container>
  );
};

export default Reviews;
