import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ count }) => {
  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return count > index++ ? (
          <StarIcon fontSize="large" className="icon" key={index} />
        ) : (
          <StarBorderIcon fontSize="large" className="icon" key={index} />
        );
      })}
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  .icon {
    color: #fdbc15;
  }
`;

export default Rating;
