import { Link } from "react-router";
import EyeIcon from "../assets/icons/eye-icon";
import HeartIcon from "../assets/icons/heart-icon";
import StarIcon from "../assets/icons/StarIcon";
import { cn } from "../utils/utils";
import Button from "./Button";
// import RatingStars from "./RatingStars";
import { Rating } from "react-simple-star-rating";
const GridItem = (product) => {
  const {
    badge = "-40%",
    id,
    image,
    title,
    price,
    rating = {},
    className,
    styleButton,
    colorVariants,
  } = product;
  console.log("rating", rating);

  // const { RatingStar, rate, count } = RatingStars(rating);
  // console.log("rating grid", <RatingStar />);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <div
          className={`${cn(
            "flex bg-colors-secondary-1 py-4 px-4 w-80 h-64 justify-between items-center",
            className
          )}`}
        >
          <p
            className={`${
              badge
                ? "bg-colors-secondary-3 text-colors-primary-1 px-2 py-1 mb-auto rounded-sm"
                : ""
            }`}
          >
            {badge}
          </p>
          <img
            src={image}
            width="158px"
            height="120px"
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="flex flex-col gap-2 mb-auto">
            <button className="flex items-center justify-center rounded-full bg-colors-bg size-10">
              {" "}
              <HeartIcon />
            </button>
            <button className="flex items-center justify-center rounded-full bg-colors-bg size-10">
              {" "}
              <EyeIcon />
            </button>
          </div>
        </div>
        <Button
          color="black"
          size="xl"
          children="add to cart"
          className={`${cn(
            "w-full text-base font-medium capitalize rounded-b-sm",
            styleButton
          )}`}
        />
      </div>
      <div className="flex flex-col gap-1 font-semibold">
        <Link to={`product/:${id}`} className="text-base uppercase">
          {title}
        </Link>
        <div className="flex gap-2 text-base font-medium font-poppins">
          <p className="text-base font-semibold text-colors-secondary-3">
            ${price}
          </p>
          <p className="text-base font-semibold line-through text-colors-text-3">
            ${price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {/* <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> */}
            {/* {<RatingStars rating={rating} />} */}
            {
              <Rating
                initialValue={0}
                iconsCount={5}
                readonly
                rtl
                fillIcon={<StarIcon />}
                fillColor="#FFAD33"
                size={20}
                allowFraction
              />
            }
          </div>

          <p className="text-base font-semibold">({rating?.count})</p>
        </div>
        {colorVariants && (
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center border-2 rounded-full size-6 border-colors-text-3">
              <span className="rounded-full bg-colors-green-2 size-4"></span>
            </button>
            <button className="flex items-center justify-center border-2 rounded-full size-6 border-colors-text-3">
              <span className="rounded-full bg-colors-secondary-3 size-4 "></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridItem;
