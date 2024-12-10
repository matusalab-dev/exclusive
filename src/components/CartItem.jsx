import React from "react";
import Input from "./form/Input";

const CartItem = ({ image, price, subtotal, quantity }) => (
  <div className="flex items-center justify-between px-10 py-4 text-base shadow-sm shadow-colors-text-2">
    <img src={image} alt="" width="56" height="56" />
    <p className="basis-1">${price}</p>
    <Input
      type="number"
      placeholder="1"
      value={quantity}
      className="basis-20"
    />
    <p className="basis-1">$650</p>
  </div>
);

export default CartItem;
