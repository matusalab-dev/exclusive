import { useMemo } from "react";
import StarIcon from "../assets/icons/StarIcon";
import HalfStarIcon from "../assets/icons/half-star-icon";
import EmptyStarIcon from "../assets/icons/empty-star-icon";

const RatingStars = ({ rating = {} }) => {
  const { rate, count } = rating;
  const MAX_STAR_COUNT = 5;
  // const RatingStar = useMemo(() => {
  const fullStars = Math.floor(rate); // Number of full stars
  const hasHalfStar = rate % 1 >= 0.5; // Check if there's a half star
  const emptyStars = MAX_STAR_COUNT - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

  // Generate JSX for the stars
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Full stars */}
      {/* {Array.from({ length: fullStars }, (_, i) => (
          <StarIcon key={`full-${i}`} />
        ))} */}
      {new Array({ length: fullStars }).map((_, i) => (
        <StarIcon key={i} />
      ))}
      {/* Half star */}
      {/* {hasHalfStar && <HalfStarIcon />} */}
      {/* Empty stars */}
      {/* {Array.from({ length: emptyStars }, (_, i) => (
          <EmptyStarIcon key={`empty-${i}`} />
        ))} */}
      {emptyStars &&
        new Array({ length: emptyStars }).map((_, i) => <StarIcon key={i} />)}
    </div>
  );
  // }, [rate]);

  // return RatingStar;
};

export default RatingStars;
