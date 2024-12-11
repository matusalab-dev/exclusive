import { createContext, useContext, useState } from "react";
import { useProductQueries } from "../api/queries/product-queries";

// create cart-context
export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const { data: products = [] } = useProductQueries();
  console.log("CartProvider", products);

  // products state
  const [productInfo, setProductInfo] = useState(products);
  const [cartStatus, setCartStatus] = useState("");
  const [qty, setQty] = useState(3);
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  /* a function get called after clicking `addtocart` button which accept two arguments,
     the product instance we want to add to the cart `productToAdd` and the quantity of the product `quantity`*/
  function handleAddToCart(productToAdd, quantity) {
    console.log("Adding to cart get clicked");

    // check if the product exist in the cart
    const doesExist = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    // if it exist in the cart
    if (doesExist) {
      // update productInfo after updating the existing cartItems in-cart state into true
      setProductInfo((prevProductInfo) => {
        const updatedCartItems = prevProductInfo.map((productInfo) =>
          productInfo.id === productToAdd.id
            ? { ...productInfo, inCart: true }
            : productInfo
        );

        return updatedCartItems;
      });

      // update cart status
      setCartStatus("product is already added in a cart!");
    } else {
      // if it is not in the cart then add it to the cart. then update the incart status into true
      setCartItems([
        ...cartItems,
        { ...productToAdd, quantity: quantity, inCart: true },
      ]);

      // then update price and quantity accordingly
      setTotalQty((prevTotalQty) => prevTotalQty + quantity);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + productToAdd.price * quantity
      );
      setQty(1);
    }
  }

  // function to remove a product from the cart and update state accordingly
  function handleRemoveFromCart(cartProduct) {
    // find that cart items with product-id to be removed.
    const productFound = cartItems.find(
      (cartItems) => cartItems.id === cartProduct.id
    );

    // return all cart items except those with id that we want to get removed
    const removedItem = cartItems.filter((item) => item.id !== cartProduct.id);
    // update the cartItems
    setCartItems(removedItem);

    setTotalQty((prevTotalQty) => prevTotalQty - productFound.quantity);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - productFound.price * productFound.quantity
    );

    // update productInfo after removing the existing cartItems, update in-cart state into false
    setProductInfo((prevProductInfo) => {
      const updatedCartItems = prevProductInfo.map((productInfo) =>
        productInfo.id === cartProduct.id
          ? { ...productInfo, inCart: false }
          : productInfo
      );

      return updatedCartItems;
    });
  }

  // handle cart quantity of individual existing cartItems
  function handleCartQuantity(id, type) {
    if (type === "inc") {
      // quantities and pricing of existing items will get updated accordingly.
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems;
      });
    } else if (type === "dec") {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });

        const totalQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const totalPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );

        setTotalQty(totalQuantity);
        setTotalPrice(totalPrice);

        return updatedCartItems;
      });
    }
  }

  // handle the quantity of items
  function handleInc() {
    setQty((prevQty) => prevQty + 1);
  }

  function handleDec() {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  }

  const stateValue = {
    productInfo,
    setProductInfo,
    handleDec,
    handleInc,
    qty,
    totalQty,
    totalPrice,
    setTotalPrice,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartQuantity,
    cartStatus,
  };

  return (
    <CartContext.Provider value={stateValue}>{children}</CartContext.Provider>
  );
}

// const useCartContext = () => useContext(CartContext);

// export { CartProvider, CartContext };
