import { useQueries } from "@tanstack/react-query";
import { useUserCarts } from "../api/queries/cart-queries";
import { useProductQueriesById } from "../api/queries/product-queries";
// import { useProductQueriesById } from "../api/queries/product-queries";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Input from "../components/form/Input";
import { getProductById } from "../api/api";

const CART_PATHS = [
  { href: "home", label: "Home" },
  { href: "cart", label: "cart" },
];

const Cart = () => {
  const USER_ID = 1;
  const { data: userCarts = [], isLoading } = useUserCarts(USER_ID);
  // console.log("cart-items", userCarts);

  const flattenArray = userCarts.flat();
  // console.log("flatten", flattenArray);
  // dependent queries
  // Then get the user 1 cart items
  const userCart = useQueries({
    queries: flattenArray
      ? flattenArray.map(({ productId }) => {
          return {
            queryKey: ["productItems", productId],
            queryFn: () => getProductById(productId),
          };
        })
      : [], // if users is undefined, an empty array will be returned
  });
  // console.log("user cart", userCart);

  const cartItems = userCart?.map((cartProduct) => cartProduct.data) || [];
  console.log("cart---Items", cartItems);

  // const flattenCartArray = userCarts?.flat();

  // console.log("user carts", userCart);
  // const cartProducts = flattenCartArray.map((product) =>
  //   useProductQueriesById(product.productId)
  // );
  // console.log("cart productsAdded", cartProducts);

  // const products = cartProducts.map((product) => product.data);
  // // const { data: productsAddedByUser } = productsAdded;
  // console.log("Items added", products);

  return (
    <section className="py-20">
      <Breadcrumb links={CART_PATHS} />
      <div className="flex items-center justify-between px-10 py-5 mt-8 text-base shadow-sm shadow-colors-text-2 font-poppins">
        <p>product</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
      </div>
      <div className="flex flex-col justify-center gap-3 mt-8">
        {/* {isLoading && (
          <p className="text-2xl font-medium text-center capitalize font-inter text-colors-text-3">
            loading...
          </p>
        )} */}
        {cartItems?.map((items, index) => {
          return <CartItem key={index} {...items} />;
        })}
        <div className="flex justify-between mt-8">
          <Button
            as="Link"
            children="Return To Shop"
            size="lg"
            className="border-2 border-colors-text-3"
          />
          <Button
            children="Update Cart"
            size="lg"
            className="border-2 border-colors-text-3"
          />
        </div>
      </div>

      <div className="flex items-start justify-between mt-16">
        <div className="flex items-center gap-2">
          <Input placeholder="Coupon Code" className="w-2/4" />
          <Button
            children="Apply Coupon"
            color="red"
            className="px-4 py-3 rounded-sm w-fit"
          />
        </div>

        <div className="flex flex-col justify-start w-1/4 gap-6 px-8 py-6 border border-colors-text-3">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div className="flex items-center justify-between">
            <p>subtotal</p>
            <p>$150</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>$1750</p>
          </div>
          <Button
            color="red"
            children="Proceed to checkout"
            className="py-3 rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
