import { Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Review = ({ reviewData }) => {
  const { name, imgUrl, intro, rating } = reviewData;
  return (
    <Paper>
      <Typography>{name}</Typography>
      <Typography>{intro}</Typography>
      <Typography>{rating}</Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Paper>
  );
};

export default Review;
