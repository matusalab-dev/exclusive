import { useCartQueries } from "../api/queries/cart-queries";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Input from "../components/form/Input";

const CART_PATHS = [
  { href: "home", label: "Home" },
  { href: "cart", label: "cart" },
];

const Cart = () => {
  const { data: cartItems = [] } = useCartQueries();
  const cartItem = cartItems[0];
  const cartProducts = cartItem?.products;

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
        {cartProducts.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="flex justify-between mt-8">
          <Button
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
