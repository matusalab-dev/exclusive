import { useCartQueries } from "../api/queries/cart-queries";
import Breadcrumb from "../components/Breadcrumb";
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
      </div>
    </section>
  );
};

export default Cart;
