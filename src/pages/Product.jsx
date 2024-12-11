import { Link, useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import FilledStarIcon from "../assets/icons/StarIcon";
import {
  useProductQueries,
  useProductQueriesById,
} from "../api/queries/product-queries";
import JoyStickWhite from "../assets/joy-stick-white.png";
import HeartIcon from "../assets/icons/heart-icon";
import DeliveryImage from "../assets/delivery-info.png";
import HalfStarIcon from "../assets/icons/half-star-icon";
import Button from "../components/Button";
import HeadingLabel from "../components/HeadingLabel";
import GridLayout from "../layouts/GridLayout";
import GridItem from "../components/GridItem";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
const PRODUCT_PATHS = [
  { href: "a", label: "Account" },
  { href: "Gaming", label: "Gaming" },
  { href: "Havic HV G-92 Gamepad", label: "Havic HV G-92 Gamepad" },
];
const ProductDetail = () => {
  const { productid } = useParams();
  const renamedProductid = productid.replace(":", "");
  const { data: singleProduct = {} } = useProductQueriesById(renamedProductid);
  const { image, title, price, rating, description } = singleProduct;
  const { data: products = [] } = useProductQueries();
  const { qty } = useContext(CartContext);
  return (
    <section className="flex flex-col items-start py-20">
      <Breadcrumb links={PRODUCT_PATHS} />

      {/* product description */}
      <div
        // key={index}
        className="flex flex-col justify-between gap-12 py-6 sm:flex-row rounded-xl "
      >
        {/* product-imgs */}
        <div className="flex items-start justify-between gap-3 max-h-96">
          <div className="flex flex-col items-stretch justify-between gap-5">
            <div className="flex items-center justify-center p-2 bg-colors-secondary-1">
              <img src={image} alt={image} width="100px" height="70px" />
            </div>
            <div className="flex items-center justify-center p-2 bg-colors-secondary-1">
              <img src={image} alt={image} width="100px" height="70px" />
            </div>
            <div className="flex items-center justify-center p-2 bg-colors-secondary-1">
              <img src={image} alt={image} width="100px" height="70px" />
            </div>
            <div className="flex items-center justify-center p-2 bg-colors-secondary-1">
              <img src={image} alt={image} width="100px" height="70px" />
            </div>
          </div>

          <div className="flex items-center p-6 bg-colors-secondary-1 min-h-96">
            <img src={image} alt={image} width="446px" height="315px" />
          </div>
        </div>
        {/* product-description */}
        <div className="flex flex-col items-stretch justify-between gap-4">
          <div className="flex flex-col items-start justify-between ">
            <div className="border-b-[1.95px] pb-3 border-b-grey-200 flex flex-col gap-3">
              <h2 className="mb-2 text-2xl font-semibold capitalize text-colors-text-3">
                {title}
              </h2>
              <div className="flex items-center gap-2 pb-4 text-grey-200">
                <FilledStarIcon />
                <FilledStarIcon />
                <FilledStarIcon />
                <FilledStarIcon />
                <HalfStarIcon />
                <p className="text-base text-colors-text-2">
                  ({rating?.count} Reviews)
                </p>
                | <span className="text-colors-green-1">In Stock</span>
              </div>
              <h3 className="text-2xl">${price}</h3>
              <p className="font-poppins max-w-[45ch]">{description}</p>
            </div>
            <div className="flex flex-col items-stretch gap-4 mt-3">
              <div className="flex items-center gap-2">
                <p className="text-xl capitalize">colors:</p>
                <div className="flex gap-1">
                  <button className="p-1 border-[0.025px] rounded-full border-colors-text-3">
                    <span className="block rounded-full bg-colors-blue size-4"></span>
                  </button>
                  <button className="p-1 border-[0.025px] rounded-full border-colors-text-3">
                    <span className="block rounded-full bg-colors-secondary-3 size-4"></span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 font-inter">
                <div className="flex items-center gap-2">
                  <p className="text-xl capitalize">size:</p>
                  <div className="flex gap-2">
                    <button className="rounded-md px-2 py-[0.0125rem] rounded-sm border border-grey-200">
                      XS
                    </button>
                    <button className="px-2 py-1 border rounded-sm rounded-md border-grey-200">
                      S
                    </button>
                    <button className="px-2 py-1 border rounded-sm rounded-md border-grey-200 text-colors-primary-1 bg-colors-secondary-3">
                      M
                    </button>
                    <button className="px-2 py-1 border rounded-sm rounded-md border-grey-200">
                      L
                    </button>
                    <button className="px-2 py-1 border rounded-sm rounded-md border-grey-200">
                      XL
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full gap-6">
                <div className="flex items-center gap-3 border rounded-md border-light_black">
                  <button
                    // onClick={() => handleDec()}
                    className="self-center px-3 py-1 text-lg border-r rounded-tl-md rounded-bl-md border-r-light_black bg-orange"
                  >
                    -
                  </button>
                  <p className="px-4 font-medium">{qty}</p>
                  <button
                    // onClick={() => handleInc()}
                    className="self-center px-3 py-1 text-xl border-l rounded-tr-md rounded-br-md bg-colors-secondary-3 text-colors-primary-1 border-l-light_black"
                  >
                    +
                  </button>
                </div>
                <Button
                  className="px-8 py-2 rounded-sm"
                  children="Buy Now"
                  color="red"
                />
                <button className="flex items-center self-stretch justify-center gap-2 p-2 font-semibold border rounded-sm border-grey-200">
                  <HeartIcon strokeColor="white" background="black" />
                </button>
              </div>
            </div>
          </div>
          {/* <img src={DeliveryImage} width="50%" height="70px" /> */}
        </div>
      </div>

      <div className="mt-56">
        <HeadingLabel Children="Related Item" />
        <GridLayout>
          {products?.map((product) => (
            <GridItem key={product.id} badge="" {...product} />
          ))}
        </GridLayout>
      </div>
    </section>
  );
};

export default ProductDetail;
